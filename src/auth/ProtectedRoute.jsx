import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isLoggedInUser = useSelector(
    (state) => state.auth.isLoggedIn
  );

  return isLoggedInUser ? children : <Navigate to="/" />;
};

export default ProtectedRoute;