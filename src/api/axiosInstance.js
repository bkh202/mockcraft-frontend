// api/axiosInstance.js

import axios from 'axios';

const getBaseURL = () => {
  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    return 'http://localhost:8081';
  }

  return 'https://mockcraft-backend.onrender.com';
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// ─────────────────────────────────────────────
// REQUEST INTERCEPTOR
// ─────────────────────────────────────────────

axiosInstance.interceptors.request.use(
  (config) => {
    if (
      config.url &&
      /\/auth\/(login|signup|refresh|logout)/.test(config.url)
    ) {
      return config;
    }

    const token =
      localStorage.getItem('accessToken') ||
      sessionStorage.getItem('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ─────────────────────────────────────────────
// RESPONSE INTERCEPTOR
// ─────────────────────────────────────────────

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      originalRequest?.url &&
      originalRequest.url.includes('/auth/')
    ) {
      return Promise.reject(error);
    }

    // Trial expired
    if (error.response?.status === 402) {
      localStorage.setItem('trialActive', 'false');
      localStorage.setItem('hasPremiumAccess', 'false');

      if (window.location.pathname !== '/upgrade') {
        window.location.href =
          '/upgrade?reason=trial_expired';
      }

      return Promise.reject(error);
    }

    if (
      (error.response?.status === 401 ||
        error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization =
              `Bearer ${token}`;

            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken =
          localStorage.getItem('refreshToken');

        if (!refreshToken) {
          throw new Error('Refresh token missing');
        }

        const response = await axios.post(
          `${axiosInstance.defaults.baseURL}/auth/refresh`,
          {
            refreshToken
          },
          {
            withCredentials: true
          }
        );

        const newAccessToken =
          response.data?.accessToken;

        if (!newAccessToken) {
          throw new Error(
            'New access token not received'
          );
        }

        localStorage.setItem(
          'accessToken',
          newAccessToken
        );

        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${newAccessToken}`;

        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${newAccessToken}`;

        processQueue(null, newAccessToken);

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userTier');
        localStorage.removeItem('trialActive');
        localStorage.removeItem('hasPremiumAccess');
        localStorage.removeItem('trialDaysLeft');

        if (
          window.location.pathname !== '/login'
        ) {
          window.location.href = '/login';
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
