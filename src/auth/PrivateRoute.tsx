import {Navigate} from "react-router-dom";
import {useAuth} from "./AuthContext.tsx";

// @ts-expect-error need to fix this
export const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();
    return currentUser ? children : <Navigate to="/luszdzet/login" />;
}