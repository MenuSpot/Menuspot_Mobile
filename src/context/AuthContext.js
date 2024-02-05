import React, { createContext, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLogIn, setIsLogin] = useState(true);
    const [userInfo, setUserInfo] = useState({ email: "", userName: "", password: "", rePassword: "" });


    const onSignIn = (token) => {
        setIsLogin(true);
        console.log("giriş yapıldı");
    };
    const onSignError = () => {
        setIsLogin(false);
        console.log("giriş yapılamadı");
    };
    const onSignOut = () => {
        setIsLogin(false);
    };

    const value = {
        isLogIn, onSignIn, onSignError, onSignOut,
        userInfo, setUserInfo
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
