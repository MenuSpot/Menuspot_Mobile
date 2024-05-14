import React, { createContext, useState } from "react";

const initialValues = {
    userInfo: "",
    token: "",
    onSignIn: () => { },
    onSignOut: () => { },
}


const AuthContext = createContext(initialValues);

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({ email: "", userName: "", password: "", rePassword: "" });
    const [authToken, setAuthToken] = useState("")

    const onSignIn = (token) => {
        setAuthToken(token)
        localStorage.setItem("token", token)
    };

    const onSignOut = () => {
        setAuthToken(null)
        localStorage.removeItem("token")
    };
    const value = {
        userInfo: userInfo,
        setUserInfo: setUserInfo,
        onSignIn: onSignIn,
        onSignOut: onSignOut,
        token: authToken,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

