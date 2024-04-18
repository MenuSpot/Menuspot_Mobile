import React, { useContext, useEffect, useState } from 'react'
import { SVGFoodSignUp, SVGMail, SVGPassword, SVGSignScreenMobile, SVGUser } from '../../../../assets/svg/index'
import { MSButton, MSContainer, MSLink, MSSpan, MSText } from '../../../../components'
import { Paths } from '../../../../enums/Paths'
import { AuthContext } from '../../../../context/AuthContext'
import { post } from '../../../../services/BaseApiService'
import { AuthForm, AuthInput } from '../../../../components/formElements'
import { MEDIUM_DEVICE_TRESHOLD } from '../../../../constants/Dimension'
import { localize } from '../../../../localization/localize'
import { Endpoints } from '../../../../constants/Endpoints'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { brandContainer, brandName, componentMobileStyle, componentStyle, errorMessage, formStyle, haveAccountText, inputMobileStyle, inputRed, inputStyle, orText, signInLink, titleMobileStyle, titleStyle } from './SignUpStyles'
import { responsiveStyleCreator } from '../../../../utils/ResponsiveControl'
import { buttonStyleCreator } from '../utils'
import { authErrors } from '../../../../constants/ErrorMessages'
import { MSColorPalette } from '../../../../assets/ui'
import { showErrorMessage } from '../../../../store/slices/errorMessageSlice'


export const SignUp = () => {
    const { setUserInfo, userInfo, onSignIn } = useContext(AuthContext);
    const [isDisabled, setIsDisabled] = useState(true);
    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)
    const [nameError, setNameError] = useState("")
    const [mailError, setMailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [rePasswordError, setRePasswordError] = useState("")

    const dispatch = useDispatch()

    const userData = {
        email: userInfo.email,
        userName: userInfo.userName,
        password: userInfo.password,
        rePassword: userInfo.rePassword
    }
    const navigate = useNavigate()

    const controlValidation = () => {
        if (userData.userName.length < 5) {
            setNameError(authErrors.nameError)
        } else setNameError("")
        if (userData.email) {
            let check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!check_email.test(userData.email)) {
                setMailError(authErrors.mailError)
            } else setMailError("")
        }
        if (userData.password.length < 8) {
            setPasswordError(authErrors.passwordError)
        } else setPasswordError("")
        if (userData.rePassword !== userData.password) {
            setRePasswordError(authErrors.rePasswordError)
        } else setRePasswordError("")
        if (userData.userName.length >= 5
            && mailError === ""
            && userData.password.length >= 8
            && userData.rePassword === userData.password
        ) {
            handleSubmit()
        }
    }


    const handleSubmit = async () => {
        const response = await post(Endpoints.CUSTOMER_REGISTER, userData);
        const token = response.data?.accessToken
        if (token) {
            onSignIn(token)
            return navigate(Paths.DEFAULT)
        } else dispatch(showErrorMessage(
            {
                title: response.title,
                description: response.description,
                buttonText: response.buttonText
            }
        ))
    }

    useEffect(() => {
        if (userInfo.userName === "" || userInfo.password === "" || userInfo.email === "" || userInfo.rePassword === "") {
            setIsDisabled(true)
        } else setIsDisabled(false)
    }, [userInfo])

    return (
        <MSContainer style={responsiveStyleCreator(windowSize, componentStyle, componentMobileStyle)}>
            {
                windowSize >= MEDIUM_DEVICE_TRESHOLD ?
                    <SVGFoodSignUp />
                    :
                    <MSContainer style={brandContainer}>
                        <SVGSignScreenMobile />
                        <MSText style={brandName}>{localize("MENUSPOT")}</MSText>
                    </MSContainer>
            }
            <AuthForm style={formStyle} handleSubmit={controlValidation}>
                <MSText
                    style={responsiveStyleCreator(windowSize, titleStyle, titleMobileStyle)}
                >
                    {localize("SIGN UP")}
                </MSText>
                <MSContainer>
                    <AuthInput
                        type={"text"}
                        placeholder="Username"
                        inputIcon={<SVGUser />}
                        style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                        setUserInfo={setUserInfo}
                        inputName="userName"
                        errorMessage={nameError}
                    />
                    <MSSpan style={errorMessage}>{nameError}</MSSpan>
                </MSContainer>
                <MSContainer>
                    <AuthInput
                        type={"mail"}
                        placeholder="E-mail adress"
                        inputIcon={<SVGMail />}
                        style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                        setUserInfo={setUserInfo}
                        inputName="email"
                        errorMessage={mailError}
                    />
                    <MSSpan style={errorMessage}>{mailError}</MSSpan>
                </MSContainer>
                <MSContainer>
                    <AuthInput
                        type={"text"}
                        placeholder="•••••••"
                        inputIcon={<SVGPassword />}
                        style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                        setUserInfo={setUserInfo}
                        inputName="password"
                        errorMessage={passwordError}
                    />
                    <MSSpan style={errorMessage}>{passwordError}</MSSpan>
                </MSContainer>
                <MSContainer>
                    <AuthInput
                        type={"text"}
                        placeholder="Confirm Password"
                        inputIcon={<SVGPassword />}
                        style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                        setUserInfo={setUserInfo}
                        inputName="rePassword"
                        errorMessage={rePasswordError}
                    />
                    <MSSpan style={errorMessage}>{rePasswordError}</MSSpan>
                </MSContainer>
                <MSButton
                    style={buttonStyleCreator(windowSize, isDisabled)}
                    type="submit"
                    disabled={isDisabled}
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
