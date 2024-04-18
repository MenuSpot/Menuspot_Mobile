import React, { createContext, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({ email: "", userName: "", password: "", rePassword: "" });
    const [isLogin, setIsLogin] = useState(false)

    const onSignIn = (token) => {
        setIsLogin(true)
        localStorage.setItem("token", token)
    };

    const onSignOut = () => {
        setIsLogin(false)
        localStorage.removeItem("token")
    };
    const value = {
        onSignIn, onSignOut,
        userInfo, setUserInfo, isLogin
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

