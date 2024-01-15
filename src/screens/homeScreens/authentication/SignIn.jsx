import React, { useContext, useEffect, useState } from 'react'
import { SVGEyeInvisible, SVGFoodSignIn, SVGPassword, SVGSignScreenMobile, SVGUser } from './../../../assets/svg/index'
import { MSButton, MSContainer, MSLink, MSText } from '../../../components'
import { Paths } from '../../../enums/Paths'
import { AuthContext } from '../../../context/AuthContext'
import { handleErrors, post } from '../../../services/BaseApiService'
import { MSColorPalette, MSFonts } from '../../../assets/ui'
import AuthForm from '../../../components/formElements/AuthForm'
import AuthInput from '../../../components/formElements/AuthInput'
import { SMALL_DEVICE_TRESHOLD } from '../../../constants/Dimension'


export const SignIn = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { setUserInfo, userInfo, onSignIn } = useContext(AuthContext)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const userData = {
        userName: userInfo.userName,
        password: userInfo.password
    }

    const handleSubmit = async () => {
        try {
            const response = await post(`Auth/login`, userData);
            if (response.responseCode === 600) onSignIn();
        }
        catch {
            handleErrors()
        }
    }

    return (
        <MSContainer style={screenWidth >= SMALL_DEVICE_TRESHOLD ? componentStyle : componentMobileStyle}>
            {
                screenWidth >= SMALL_DEVICE_TRESHOLD ?
                    <SVGFoodSignIn />
                    :
                    <MSContainer style={brandContainer}>
                        <SVGSignScreenMobile />
                        <MSText style={brandName}>MENUSPOT</MSText>
                    </MSContainer>
            }
            <AuthForm style={formStyle} handleSubmit={handleSubmit}>
                <MSText
                    style={screenWidth >= 1025 ? titleStyle : titleMobileStyle}
                >
                    SIGN IN
                </MSText>
                <AuthInput
                    type={"text"}
                    placeholder="Username"
                    inputIcon={<SVGUser />}
                    style={screenWidth >= 1025 ? inputStyle : inputMobileStyle}
                    setUserInfo={setUserInfo}
                    inputName="userName"
                />
                <AuthInput
                    type={"password"}
                    placeholder="•••••••"
                    inputIcon={<SVGPassword />}
                    eyeIcon={<SVGEyeInvisible />}
                    style={screenWidth >= 1025 ? inputStyle : inputMobileStyle}
                    setUserInfo={setUserInfo}
                    inputName="password"
                />
                <MSButton
                    style={screenWidth >= 1025 ? buttonStyle : buttonMobileStyle}
                    type="submit"
                >
                    SIGN IN
                </MSButton>
                <MSText
                    style={orText}
                >
                    or
                </MSText>
                <MSText
                    style={haveAccountText}
                >
                    Don't you have an account?
                    <MSLink to={Paths.SIGN_UP} style={signInLink}>Sign up</MSLink>
                </MSText>
            </AuthForm>
        </MSContainer >
    )
}
//#region Large device styles
const componentStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(${MSColorPalette.gradientBackground.gradientBgColor1}, ${MSColorPalette.gradientBackground.gradientBgColor2})`,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
}
const titleStyle = {
    marginTop: "-10px",
    color: MSColorPalette.text500,
    fontFamily: MSFonts.MerriweatherBold100.fontFamily,
    fontSize: MSFonts.MerriweatherBold100.fontSize,
    fontWeight: MSFonts.MerriweatherBold100.fontWeight
}
const inputStyle = {
    width: "488px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    padding: "12px 50px",
    border: `1px solid ${MSColorPalette.white}`,
    borderRadius: "76.565px",
    backgroundColor: "transparent",
    outline: "none"
}
const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
}
const buttonStyle = {
    display: "flex",
    width: "488px",
    height: "52px",
    padding: " 12.977px 20.763px",
    borderRadius: "31.145px",
    justifyContent: "center",
    alignItems: "center",
    gap: "5.191px",
    backgroundColor: MSColorPalette.primary500,
    border: `1px solid ${MSColorPalette.primary500}`,
    color: MSColorPalette.buttonTextColor,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    cursor: "pointer"
}
const orText = {
    color: MSColorPalette.text400,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight
}
const haveAccountText = {
    color: MSColorPalette.text400,
    fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
    fontSize: MSFonts.MerriweatherRegular100.fontSize,
    fontWeight: MSFonts.MerriweatherRegular100.fontWeight
}
const signInLink = {
    textDecoration: "none",
    color: MSColorPalette.primary700,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight
}
//#endregion

//#region Small device styles
const componentMobileStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(${MSColorPalette.gradientBackground.gradientBgColor1}, ${MSColorPalette.gradientBackground.gradientBgColor2})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
}
const brandContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 28
}
const brandName = {
    color: MSColorPalette.brandName,
    width: "239.809px",
    height: "31px",
    textAlign: "center",
    fontFamily: MSFonts.MerriweatherBold100.fontFamily,
    fontSize: MSFonts.MerriweatherBold100.fontSize,
    fontWeight: MSFonts.MerriweatherBold100.fontWeight,
}
const titleMobileStyle = {
    display: "none"
}
const inputMobileStyle = {
    width: "382px",
    height: "44px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    padding: "12.977px 50px",
    border: `1px solid ${MSColorPalette.white}`,
    borderRadius: "76.565px",
    backgroundColor: "transparent",
    outline: "none"
}
const buttonMobileStyle = {
    display: "flex",
    width: "382px",
    height: "56px",
    padding: " 8px 12px",
    borderRadius: "31.145px",
    justifyContent: "center",
    alignItems: "center",
    gap: "5.191px",
    backgroundColor: MSColorPalette.primary500,
    border: `1px solid ${MSColorPalette.primary500}`,
    color: MSColorPalette.buttonTextColor,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    cursor: "pointer"
}
//#endregion

