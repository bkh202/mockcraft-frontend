import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, protectedRoutes, protectedPortfolioRoutes } from "./router/routes";
import ProtectedRoute from "./router/ProtectedRoute";
import AppLayout from "./layouts/AppLayout";
import RoleRoute from "./router/RoleRoute";
import AdminDashboard from "./admin/AdminDashboard";
import PortfolioLayout from "./layouts/PortfolioLayout";
import PreviewPortfolio from "./pages/portfoliobuilder/components/PreviewPortfolio";
import AnalyzerLayout from "./layouts/AnalyzerLayout";
import { protectedResumeAnalyzerRoutes } from "./router/routes";
function App() {
  return (
    <Routes>
      {/* 🟢 PUBLIC ROUTES */}
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {/* 🔴 PROTECTED ROUTES (Global Auth Wrapper) */}
      <Route element={<ProtectedRoute />}>
        
        {/* 👉 1. MAIN APP LAYOUT (For Mock Tests, Dashboard etc.) */}
        <Route element={<AppLayout />}>
          {protectedRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* ADMIN ROUTE */}
          <Route path="/admin" element={
            <RoleRoute allowedRoles={["ROLE_ADMIN"]}>
              <AdminDashboard />
            </RoleRoute>
          } />
        </Route>

        {/* 👉 2. PORTFOLIO LAYOUT (For Dashboard, Create, Edit) */}
        <Route element={<PortfolioLayout />}>
          {protectedPortfolioRoutes.map((route) => (
            // DHYAN RAHE: Apne routes.js me se "/preview/:id" ko HATA dena!
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route element={<AnalyzerLayout />}>
          {protectedResumeAnalyzerRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        {/* 🚀 👉 3. STANDALONE PREVIEW ROUTE (Bina kisi sidebar/navbar layout ke) */}
        <Route path="/preview/:id" element={<PreviewPortfolio />} />

      </Route>

      {/* ⚠️ FALLBACK ROUTE */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;