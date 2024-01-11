import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLogIn, setIsLogin] = useState(false);

    useEffect(() => {
        const storedIsLogIn = localStorage.getItem("isLogIn");
        setIsLogin(storedIsLogIn === "true");
    }, []);

    // local storage'e kayıt oluşturulan yer
    if (isLogIn) {
        localStorage.setItem("isLogIn", "true");
    }

    const onSignIn = (token) => {
        setIsLogin(true);
        console.log("giriş yapıldı");
    };

    const signUpFail = () => {
        setIsLogin(false);
        console.log("giriş yapılamadı");
    };

    const logOut = () => {
        setIsLogin(false);
        localStorage.removeItem("isLogIn");
        console.log("çıkış yapıldı");
    };

    return (
        <AuthContext.Provider value={{ isLogIn, onSignIn, signUpFail, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
