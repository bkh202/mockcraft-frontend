import axios from "../api/axiosInstance";

export const getPublicPortfolio = async (slug) => {
    try {
        const res = await axios.get(`/p/${slug}`);
        return res.data;
    } catch (err) {
        console.error("Failed to fetch portfolio", err);
        throw err;
    }
};