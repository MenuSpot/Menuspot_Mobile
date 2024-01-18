import React, { useContext} from 'react'
import { SVGEyeInvisible, SVGFoodSignUp, SVGMail, SVGPassword, SVGSignScreenMobile, SVGUser } from './../../../assets/svg/index'
import { MSButton, MSContainer, MSLink, MSText } from '../../../components'
import { ColorPalette } from '../../../assets/ui/ColorPalette'
import { Fonts } from '../../../assets/ui/Fonts'
import { Paths } from '../../../enums/Paths'
import { AuthContext } from '../../../context/AuthContext'
import { handleErrors, post } from '../../../services/BaseApiService'
import { AuthForm, AuthInput } from '../../../components/formElements'
import { SMALL_DEVICE_TRESHOLD } from '../../../constants/Dimension'
import { localize } from '../../../localization/localize'
import { Endpoints } from '../../../constants/Endpoints'
import { useSelector } from 'react-redux'


export const SignUp = () => {
    const windowSize = useSelector(state => state.innerWidthSlice.size)
    const { setUserInfo, userInfo, onSignIn } = useContext(AuthContext);

    const userData = {
        email: userInfo.email,
        userName: userInfo.userName,
        password: userInfo.password
    }

    const handleSubmit = async () => {
        if (userData.password !== "" && userData.password === userInfo.RePassword) {
            try {
                const response = await post(Endpoints.CUSTOMER_REGISTER, userData);
                if (response.responseCode === 600) onSignIn();
            } catch {
                handleErrors()
            }
        } else console.log("eşit değil") //when password and confirm doesn't match.
    }

    return (
        <MSContainer style={windowSize >= SMALL_DEVICE_TRESHOLD ? componentStyle : componentMobileStyle}>
            {
                windowSize >= SMALL_DEVICE_TRESHOLD ?
                    <SVGFoodSignUp />
                    :
                    <MSContainer style={brandContainer}>
                        <SVGSignScreenMobile />
                        <MSText style={brandName}>{localize("MENUSPOT")}</MSText>
                    </MSContainer>
            }
            <AuthForm style={formStyle} handleSubmit={handleSubmit}>
                <MSText
                    style={windowSize >= SMALL_DEVICE_TRESHOLD ? titleStyle : titleMobileStyle}
                >
                    {localize("SIGN UP")}
                </MSText>
                <AuthInput
                    type={"text"}
                    placeholder="Username"
                    inputIcon={<SVGUser />}
                    style={windowSize >= SMALL_DEVICE_TRESHOLD ? inputStyle : inputMobileStyle}
                    setUserInfo={setUserInfo}
                    inputName="userName"
                />
                <AuthInput
                    type={"mail"}
                    placeholder="E-mail adress"
                    inputIcon={<SVGMail />}
                    style={windowSize >= SMALL_DEVICE_TRESHOLD ? inputStyle : inputMobileStyle}
                    setUserInfo={setUserInfo}
                    inputName="email"
                />
                <AuthInput
                    type={"password"}
                    placeholder="•••••••"
                    inputIcon={<SVGPassword />}
                    eyeIcon={<SVGEyeInvisible />}
                    style={windowSize >= SMALL_DEVICE_TRESHOLD ? inputStyle : inputMobileStyle}
                    setUserInfo={setUserInfo}
                    inputName="password"
                />
                <AuthInput
                    type={"password"}
                    placeholder="Confirm Password"
                    inputIcon={<SVGPassword />}
                    eyeIcon={<SVGEyeInvisible />}
                    style={windowSize >= SMALL_DEVICE_TRESHOLD ? inputStyle : inputMobileStyle}
                    setUserInfo={setUserInfo}
                    inputName="RePassword"
                />
                <MSButton
                    style={windowSize >= SMALL_DEVICE_TRESHOLD ? buttonStyle : buttonMobileStyle}
                    type="submit"
                >
                    {localize("SIGN UP")}
                </MSButton>
                <MSText
                    style={orText}
                >
                    {localize("or")}
                </MSText>
                <MSText
                    style={haveAccountText}
                >
                    {localize("Do you have an account?")}
                    <MSLink to={Paths.DEFAULT} style={signInLink}>{localize("Sign in")}</MSLink>
                </MSText>
            </AuthForm>
        </MSContainer >
    )
}

//#region Large device styles
const componentStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(${ColorPalette.gradientBackground.gradientBgColor1}, ${ColorPalette.gradientBackground.gradientBgColor2})`,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
}
const titleStyle = {
    marginTop: "-10px",
    color: ColorPalette.text500,
    fontFamily: Fonts.MerriweatherBold100.fontFamily,
    fontSize: Fonts.MerriweatherBold100.fontSize,
    fontWeight: Fonts.MerriweatherBold100.fontWeight
}
const inputStyle = {
    width: "488px",
    color: ColorPalette.white,
    fontFamily: Fonts.MerriweatherRegular200.fontFamily,
    fontSize: Fonts.MerriweatherRegular200.fontSize,
    fontWeight: Fonts.MerriweatherRegular200.fontWeight,
    padding: "12px 48px",
    border: `1px solid ${ColorPalette.white}`,
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
    backgroundColor: ColorPalette.primary500,
    border: `1px solid ${ColorPalette.primary500}`,
    color: ColorPalette.buttonTextColor,
    fontFamily: Fonts.MerriweatherRegular200.fontFamily,
    fontSize: Fonts.MerriweatherRegular200.fontSize,
    fontWeight: Fonts.MerriweatherRegular200.fontWeight,
}
const orText = {
    color: ColorPalette.text400,
    fontFamily: Fonts.MerriweatherBold25.fontFamily,
    fontSize: Fonts.MerriweatherBold25.fontSize,
    fontWeight: Fonts.MerriweatherBold25.fontWeight
}
const haveAccountText = {
    color: ColorPalette.text400,
    fontFamily: Fonts.MerriweatherRegular100.fontFamily,
    fontSize: Fonts.MerriweatherRegular100.fontSize,
    fontWeight: Fonts.MerriweatherRegular100.fontWeight
}
const signInLink = {
    textDecoration: "none",
    color: ColorPalette.primary700,
    fontFamily: Fonts.MerriweatherBold25.fontFamily,
    fontSize: Fonts.MerriweatherBold25.fontSize,
    fontWeight: Fonts.MerriweatherBold25.fontWeight
}
//#endregion

//#region Small device styles
const componentMobileStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(${ColorPalette.gradientBackground.gradientBgColor1}, ${ColorPalette.gradientBackground.gradientBgColor2})`,
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
    color: ColorPalette.brandName,
    width: "239.809px",
    height: "31px",
    textAlign: "center",
    fontFamily: Fonts.MerriweatherBold100.fontFamily,
    fontSize: Fonts.MerriweatherBold100.fontSize,
    fontWeight: Fonts.MerriweatherBold100.fontWeight,
}
const titleMobileStyle = {
    display: "none"
}
const inputMobileStyle = {
    width: "382px",
    height: "44px",
    color: ColorPalette.white,
    fontFamily: Fonts.MerriweatherRegular200.fontFamily,
    fontSize: Fonts.MerriweatherRegular200.fontSize,
    fontWeight: Fonts.MerriweatherRegular200.fontWeight,
    padding: "12.977px 42px",
    border: `1px solid ${ColorPalette.white}`,
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
    cursor: "pointer",
    marginTop: "22px",
    backgroundColor: ColorPalette.primary500,
    border: `1px solid ${ColorPalette.primary500}`,
    color: ColorPalette.buttonTextColor,
    fontFamily: Fonts.MerriweatherRegular200.fontFamily,
    fontSize: Fonts.MerriweatherRegular200.fontSize,
    fontWeight: Fonts.MerriweatherRegular200.fontWeight
}
//#endregion

