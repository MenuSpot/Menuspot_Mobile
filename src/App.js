import React, { useContext, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Paths } from './enums/Paths';
import { AboutUsScreen, SignInScreen, SignUpScreen } from "./screens/homeScreens";
import { AuthContext } from "./context/AuthContext";
import { MenuScreen, RestaurantListScreen } from "./screens/restaurantScreens";
import { MSContainer } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { changeScreenSize, isHamburgetOpen } from "./store/slices/innerWidthSlice";
import HamburgerMenu from "./components/navbar/HamburgerMenu";

const App = () => {
  const hamburgerMenu = useSelector(isHamburgetOpen)
  const { isLogIn } = useContext(AuthContext)
  const dispatch = useDispatch()

  dispatch(changeScreenSize(window.innerWidth))
  useEffect(() => {
    const handleResize = () => {
      dispatch(changeScreenSize(window.innerWidth))
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  return (
    <MSContainer className='App'>
      {
        isLogIn ?
          <>
            <Navbar />
            <HamburgerMenu style={{ display: hamburgerMenu ? "flex" : "none" }} />
            <Routes>
              <Route path={Paths.DEFAULT} element={<RestaurantListScreen />} />
              <Route path={Paths.MENU} element={<MenuScreen />} />
              <Route path={Paths.ABOUT_US} element={<AboutUsScreen />} />
            </Routes>
          </> :
          <Routes>
            <Route path={Paths.DEFAULT} element={<SignInScreen />} />
            <Route path={Paths.SIGN_UP} element={<SignUpScreen />} />
          </Routes>
      }
    </MSContainer >
  );
}
export default App;

//TODOS
// restaurantList responsive uyarla
// Navbarda ögelerin hover ve clicked tasarımları.
// yazılan şifreyi görünür kıl icon da ona göre değişsin.
// bilgiler girilmeden önce button disabled olsun ve cursor not allowed.
// İnputların wrong text style düzenlemesi. 