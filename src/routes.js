import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/use_auth";

export const PublicRoute = ({ Component }) => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to="/" /> : <Component />;
};
export const PrivateRoute = ({ Component }) => {
  const { isAuth } = useAuth();
  return isAuth ? <Component /> : <Navigate to="/dashboard" />;
};
