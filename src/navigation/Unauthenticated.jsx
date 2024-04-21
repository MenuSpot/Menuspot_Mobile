import { Route, Routes } from "react-router-dom"
import { Paths } from "../enums/Paths"
import { SignInScreen, SignUpScreen } from "../screens/homeScreens"

const Unauthenticated = () => {
    return (
        <Routes>
            <Route path={Paths.DEFAULT} element={<SignInScreen />} />
            <Route path={Paths.SIGN_UP} element={<SignUpScreen />} />
        </Routes>
    )
}

export default Unauthenticated