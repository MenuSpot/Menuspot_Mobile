import React, { createContext, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLogIn, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({ email: "", userName: "", password: "", rePassword: "" });

    const onSignIn = (token) => {
        setIsLogin(true);
        localStorage.setItem("token", token)
    };
    const onSignError = (error) => {
        setIsLogin(false);
    };
    const onSignOut = () => {
        setIsLogin(false);
        localStorage.removeItem("token")
    };
    const value = {
        isLogIn, onSignIn, onSignError, onSignOut,
        userInfo, setUserInfo,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

