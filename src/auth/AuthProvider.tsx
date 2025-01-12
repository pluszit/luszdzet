// @ts-expect-error need to fix this
import React, {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {firebaseApp} from "../firebase.ts";
import {AuthContext} from "./AuthContext.tsx";

// @ts-expect-error need to fix this
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth(firebaseApp);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // @ts-expect-error need to fix this
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // @ts-expect-error need to fix this
    const login = (email, password) => {
        const auth = getAuth(firebaseApp);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const value = { currentUser, login };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
