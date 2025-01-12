import {Navigate} from "react-router-dom";
import {useAuth} from "./AuthContext.tsx";

export const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();
    return currentUser ? children : <Navigate to="/luszdzet/login" />;
}