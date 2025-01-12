import React, {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {firebaseApp} from "../firebase.ts";
import {AuthContext} from "./AuthContext.tsx";

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth(firebaseApp);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const login = (email, password) => {
        const auth = getAuth(firebaseApp);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const value = { currentUser, login };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
