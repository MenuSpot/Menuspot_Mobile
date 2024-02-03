import React, { useContext, useEffect, useState } from 'react'
import { SVGEyeInvisible, SVGEyeVisible, SVGFoodSignIn, SVGPassword, SVGSignScreenMobile, SVGUser } from './../../../assets/svg/index'
import { MSButton, MSContainer, MSLink, MSText } from '../../../components'
import { Paths } from '../../../enums/Paths'
import { AuthContext } from '../../../context/AuthContext'
import { handleErrors, post } from '../../../services/BaseApiService'
import { SMALL_DEVICE_TRESHOLD } from '../../../constants/Dimension'
import { localize } from '../../../localization/localize'
import { Endpoints } from '../../../constants/Endpoints'
import { useSelector } from 'react-redux'
import { screenSize } from '../../../store/slices/innerWidthSlice'
import {
    brandContainer, brandName, componentMobileStyle,
    componentStyle, formStyle, haveAccountText, inputMobileStyle, inputStyle,
    orText, signInLink, titleMobileStyle, titleStyle
} from './styles'
import { buttonStyleCreator } from './utils'
import { responsiveStyleCreator } from '../../../utils/ResponsiveControl'
import { AuthForm, AuthInput } from '../../../components/formElements'

export const SignIn = () => {
    const windowSize = useSelector(screenSize);
    const { setUserInfo, userInfo, onSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const userData = {
        userName: userInfo.userName,
        password: userInfo.password
    }
    const handleSubmit = async () => {
        try {
            const response = await post(Endpoints.AUTH_LOGIN, userData);
            if (response.responseCode === 600) onSignIn();
        }
        catch {
            handleErrors()
        }
    }
    useEffect(() => {
        if (userData.password === "" || userData.userName === "") {
            setIsDisabled(true)
        } else setIsDisabled(false)
    }, [userInfo])

    return (
        <MSContainer style={responsiveStyleCreator(windowSize, componentStyle, componentMobileStyle)}>
            {
                windowSize >= SMALL_DEVICE_TRESHOLD ?
                    <SVGFoodSignIn />
                    :
                    <MSContainer style={brandContainer}>
                        <SVGSignScreenMobile />
                        <MSText style={brandName}>{localize("MENUSPOT")}</MSText>
                    </MSContainer>
            }
            <AuthForm style={formStyle} handleSubmit={handleSubmit}>
                <MSText
                    style={responsiveStyleCreator(windowSize, titleStyle, titleMobileStyle)}
                >
                    {localize("SIGN IN")}
                </MSText>
                <AuthInput
                    type={"text"}
                    placeholder="Username"
                    inputIcon={<SVGUser />}
                    style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                    setUserInfo={setUserInfo}
                    inputName="userName"
                    setIsDisabled={setIsDisabled}
                />
                <AuthInput
                    type={showPassword ? "text" : "password"}
                    placeholder="•••••••"
                    inputIcon={<SVGPassword />}
                    style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                    setUserInfo={setUserInfo}
                    inputName="password"
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    visiblePassword={<SVGEyeVisible />}
                    hiddenPassword={<SVGEyeInvisible />}
                    setIsDisabled={setIsDisabled}
                />
                <MSButton
                    style={buttonStyleCreator(windowSize, isDisabled)}
                    disabled={isDisabled}
                    type="submit"
                >
                    {localize("SIGN IN")}
                </MSButton>
                <MSText
                    style={orText}
                >
                    {localize("or")}
                </MSText>
                <MSText
                    style={haveAccountText}
                >
                    {localize("Don't you have an account?")}
                    <MSLink MSLink to={Paths.SIGN_UP} style={signInLink} >{localize("Sign up")}</MSLink>
                </MSText>
            </AuthForm>
        </MSContainer >
    )
}