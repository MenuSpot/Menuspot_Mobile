import React, { useContext, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import { Paths } from './enums/Paths';
import { MSContainer, MSModal } from "./components";
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/Navbar';
import { AuthContext } from "./context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { AboutUsScreen, SignInScreen, SignUpScreen } from "./screens/homeScreens";
import { MenuScreen, RestaurantListScreen } from "./screens/restaurantScreens";
import HamburgerMenu from "./components/navbar/hamburgerMenu/HamburgerMenu";
import { changeScreenSize } from "./store/slices/innerWidthSlice";

const App = () => {
  const { isHamburgerOpen: hamburgerMenu } = useSelector((state) => state.innerWidthSlice)
  const { isLogIn } = useContext(AuthContext)
  const dispatch = useDispatch()
  const { isVisible: isErrorMessageVisible } = useSelector((state) => state.errorMessageSlice)

  useEffect(() => {
    const handleResize = () => {
      dispatch(changeScreenSize(window.innerWidth))
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [dispatch])

  return (
    <MSContainer style={styles.appContainer}>
      {
        isErrorMessageVisible && <MSModal />
      }
      {
        localStorage.getItem("token") ?
          <>
            <Navbar />
            <HamburgerMenu style={{ display: hamburgerMenu ? "flex" : "none" }} />
            <Routes>
              <Route path={Paths.DEFAULT} element={<RestaurantListScreen />} />
              <Route path={`${Paths.MENU}/:id/:name`} element={<MenuScreen />} />
              <Route path={Paths.ABOUT_US} element={<AboutUsScreen />} />
            </Routes>
            <Footer />
          </> :
          <>
            <Routes>
              <Route path={Paths.DEFAULT} element={<SignInScreen />} />
              <Route path={Paths.SIGN_UP} element={<SignUpScreen />} />
            </Routes>
          </>
      }
    </MSContainer >
  );
}
export default App;

const styles = {
  appContainer: {
    height: "100%",
    width: "100%",
  }
}

//TODOS


// view1 menü için cardlara flip özelliği ve arkasına bakma özelliği getirilmeli.
// skeleton loading yapılmalı.
// menü ekranında iken navbarda restaurants aktif olmamalı.
// Medium device için medium trashold'a göre mobil responsive düzenlemesi yapılabilir.