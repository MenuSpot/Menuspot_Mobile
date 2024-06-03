import React, { useContext, useEffect, useState } from 'react'
import { SVGEyeInvisible, SVGEyeVisible, SVGFoodSignIn, SVGPassword, SVGSignScreenMobile, SVGUser } from '../../../../assets/svg/index'
import { MSButton, MSContainer, MSLink, MSText } from '../../../../components'
import { Paths } from '../../../../enums/Paths'
import { AuthContext } from '../../../../context/AuthContext'
import { post } from '../../../../services/BaseApiService'
import { MEDIUM_DEVICE_TRESHOLD } from '../../../../constants/Dimension'
import { localize } from '../../../../localization/localize'
import { Endpoints } from '../../../../constants/Endpoints'
import { useDispatch, useSelector } from 'react-redux'
import { brandContainer, brandName, componentMobileStyle, componentStyle, formStyle, haveAccountText, inputMobileStyle, inputStyle, orText, signInLink, titleMobileStyle, titleStyle } from './SignInStyles'
import { buttonStyleCreator } from '../utils'
import { responsiveStyleCreator } from '../../../../utils/ResponsiveControl'
import { AuthForm, AuthInput } from '../../../../components/formElements'
import { showErrorMessage } from '../../../../store/slices/errorMessageSlice'

export const SignIn = () => {
    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)
    const dispatch = useDispatch()
    const { setUserInfo, userInfo, onSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setUserInfo({ email: "", userName: "", password: "", rePassword: "" });
    }, [])

    useEffect(() => {
        const checkIsDisabled = () => {
            const passwordDisabled = userInfo.password === ""
            const userNameDisabled = userInfo.userName === ""
            if (passwordDisabled || userNameDisabled) {
                setIsDisabled(true)
            } else setIsDisabled(false)
        }
        checkIsDisabled()
    }, [userInfo])

    const userData = {
        userName: userInfo.userName,
        password: userInfo.password
    }

    const handleSubmit = async () => {
        const response = await post(Endpoints.AUTH_LOGIN, userData);
        if (!response.data) {
            dispatch(showErrorMessage({ title: response.title, description: response.description, buttonText: response.buttonText }))
        }
        const token = response.data?.accessToken
        if (token) {
            onSignIn(token)
        }
    }
    
    return (
        <MSContainer style={responsiveStyleCreator(windowSize, componentStyle, componentMobileStyle)}>
            {
                windowSize >= MEDIUM_DEVICE_TRESHOLD ?
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
                <MSContainer>
                    <AuthInput
                        type={"text"}
                        placeholder="Username"
                        inputIcon={<SVGUser />}
                        style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                        setUserInfo={setUserInfo}
                        inputName="userName"
                        setIsDisabled={setIsDisabled}
                    />
                </MSContainer>
                <MSContainer>
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
                </MSContainer>
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