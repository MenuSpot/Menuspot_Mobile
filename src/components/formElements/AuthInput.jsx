import React, { useState } from 'react'
import { MSColorPalette } from '../../assets/ui';
import { useSelector } from 'react-redux';

const AuthInput = (props) => {
    const { isMobileDevice: isMobile } = useSelector((state) => state.innerWidthSlice)
    const { type, inputIcon, style, setUserInfo, inputName, placeholder, showPassword, setShowPassword,
        visiblePassword, hiddenPassword, errorMessage } = props;
    const [inputValue, setInputValue] = useState("");
    return (
        <div style={componentStyle}>
            <div style={{ ...inputIconStyle, left: isMobile ? "9%" : "3%" }}>{inputIcon}</div>
            <input
                className='custom-input'
                type={type}
                style={{
                    ...style,
                    borderColor: errorMessage ? MSColorPalette.errorInputColor : MSColorPalette.white,
                }}
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
    position: "relative",
    zIndex: "1",
    display: "flex",
    justifyContent: "center"
}
const inputIconStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "1",
}
const eyeIconStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-40%)",
    right: "30px",
    cursor: "pointer"
}
