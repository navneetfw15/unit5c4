import { Navigate } from "react-router-dom";

// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {
    const isAuth = true
    if(!isAuth){
        return < Navigate to="/login" />
    }
    return children;
};