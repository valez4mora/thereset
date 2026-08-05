import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "@/hooks/useAuth";

export function RedirectIfAuthenticated({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Navigate to="/" replace />;

  return children;
}

RedirectIfAuthenticated.propTypes = {
  children: PropTypes.node.isRequired,
};