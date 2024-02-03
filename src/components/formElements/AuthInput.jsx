import React, { useState } from 'react'

const AuthInput = (props) => {
    const { type, inputIcon, style, setUserInfo, inputName, placeholder, showPassword, setShowPassword,
        visiblePassword, hiddenPassword } = props;
    const [inputValue, setInputValue] = useState("");

    return (
        <div style={componentStyle}>
            <input
                className='custom-input'
                type={type}
                style={style}
                value={props.children}
                placeholder={placeholder}
                autoComplete='off'
                onChange={(e) => {
                    setInputValue(e.target.value);
                    setUserInfo(prev => ({
                        ...prev,
                        [inputName]: e.target.value
                    }))
                }}
            />
            <div style={inputIconStyle}>{inputIcon}</div>
            <div style={{ ...eyeIconStyle, display: inputValue.length > 0 ? "inline" : "none" }}
                onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ?
                        visiblePassword
                        :
                        hiddenPassword
                }
            </div>
        </div>
    )
}
export default AuthInput

const componentStyle = {
    position: "relative"
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
