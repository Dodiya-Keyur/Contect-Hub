import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // If not logged in, redirect to Login page
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    // If logged in, show the requested page
    return children;
};

export default ProtectedRoute;