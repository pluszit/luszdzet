// src/auth/AuthProvider.tsx
import {createContext, useContext} from "react";
import {User, UserCredential} from "firebase/auth";

interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<UserCredential>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};