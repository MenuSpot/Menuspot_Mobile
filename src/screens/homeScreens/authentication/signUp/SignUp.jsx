import React, { useContext, useEffect, useState } from 'react'
import { SVGFoodSignUp, SVGMail, SVGPassword, SVGSignScreenMobile, SVGUser } from '../../../../assets/svg/index'
import { MSButton, MSContainer, MSLink, MSText } from '../../../../components'
import { Paths } from '../../../../enums/Paths'
import { AuthContext } from '../../../../context/AuthContext'
import { handleErrors, post } from '../../../../services/BaseApiService'
import { AuthForm, AuthInput } from '../../../../components/formElements'
import { SMALL_DEVICE_TRESHOLD } from '../../../../constants/Dimension'
import { localize } from '../../../../localization/localize'
import { Endpoints } from '../../../../constants/Endpoints'
import { useSelector } from 'react-redux'
import { screenSize } from '../../../../store/slices/innerWidthSlice'
import { useNavigate } from 'react-router-dom'
import { brandContainer, brandName, componentMobileStyle, componentStyle, formStyle, haveAccountText, inputMobileStyle, inputStyle, orText, signInLink, titleMobileStyle, titleStyle } from './SignUpStyles'
import { responsiveStyleCreator } from '../../../../utils/ResponsiveControl'
import { buttonStyleCreator } from '../utils'


export const SignUp = () => {
    const { setUserInfo, userInfo, onSignIn } = useContext(AuthContext);
    const [isDisabled, setIsDisabled] = useState(true);
    const windowSize = useSelector(screenSize)
    const navigate = useNavigate()

    const userData = {
        email: userInfo.email,
        userName: userInfo.userName,
        password: userInfo.password,
        rePassword: userInfo.rePassword
    }

    const handleSubmit = async () => {
        if (userData.password !== "" && userData.password === userInfo.RePassword) {
            try {
                const response = await post(Endpoints.CUSTOMER_REGISTER, userData);
                if (response.responseCode === 600) onSignIn();
                return navigate(Paths.DEFAULT)
            } catch {
                handleErrors()
            }
        } else console.log("eşit değil") //when password and confirm doesn't match.
    }

    useEffect(() => {
        if (userInfo.userName === "" || userInfo.password === "" || userInfo.email === "" || userInfo.rePassword === "") {
            setIsDisabled(true)
        } else setIsDisabled(false)
    }, [userInfo])

    return (
        <MSContainer style={responsiveStyleCreator(windowSize, componentStyle, componentMobileStyle)}>
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
                    style={responsiveStyleCreator(windowSize, titleStyle, titleMobileStyle)}
                >
                    {localize("SIGN UP")}
                </MSText>
                <AuthInput
                    type={"text"}
                    placeholder="Username"
                    inputIcon={<SVGUser />}
                    style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                    setUserInfo={setUserInfo}
                    inputName="userName"
                />
                <AuthInput
                    type={"mail"}
                    placeholder="E-mail adress"
                    inputIcon={<SVGMail />}
                    style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                    setUserInfo={setUserInfo}
                    inputName="email"
                />
                <AuthInput
                    type={"text"}
                    placeholder="•••••••"
                    inputIcon={<SVGPassword />}
                    style={responsiveStyleCreator(windowSize, inputStyle, inputMobileStyle)}
                    setUserInfo={setUserInfo}
                    inputName="password"
                />
                <AuthInput
                    type={"text"}
                    placeholder="Confirm Password"
                    inputIcon={<SVGPassword />}
                    style={windowSize >= SMALL_DEVICE_TRESHOLD ? inputStyle : inputMobileStyle}
                    setUserInfo={setUserInfo}
                    inputName="rePassword"
                />
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
