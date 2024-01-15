import React, { useState } from 'react'

const AuthInput = (props) => {
    const { type, inputIcon, eyeIcon, style, setUserInfo, inputName, placeholder } = props;
    const [inputValue, setInputValue] = useState("");
    return (
        <div style={{ position: "relative" }}>
            <input
                className='custom-input'
                type={type}
                style={style}
                value={props.children}
                placeholder={placeholder}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    setUserInfo(prev => ({
                        ...prev,
                        [inputName]: e.target.value
                    }))
                }}
            />
            <div style={inputIconStyle}>{inputIcon}</div>
            <div
                style={{ ...eyeIconStyle, display: inputValue.length > 0 ? "inline" : "none" }}
            >
                {eyeIcon}
            </div>
        </div>
    )
}
const inputIconStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-40%)",
    left: "16px",
}
const eyeIconStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-40%)",
    right: "16px",
    cursor: "pointer"
}

export default AuthInput