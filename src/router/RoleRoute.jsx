import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleRoute = ({ allowedRoles, children }) => {

  const { user } = useAuth();

  console.log("ROLE ROUTE USER:", user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    console.log("ROLE MISMATCH:", user.role, allowedRoles);
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default RoleRoute;

