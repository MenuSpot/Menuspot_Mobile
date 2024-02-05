import React, { useContext, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import { Paths } from './enums/Paths';
import { MSContainer } from "./components";
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/Navbar';
import { AuthContext } from "./context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { AboutUsScreen, SignInScreen, SignUpScreen } from "./screens/homeScreens";
import { MenuScreen, RestaurantListScreen } from "./screens/restaurantScreens";
import HamburgerMenu from "./components/navbar/hamburgerMenu/HamburgerMenu";
import { changeScreenSize, isHamburgerOpen } from "./store/slices/innerWidthSlice";

const App = () => {
  const hamburgerMenu = useSelector(isHamburgerOpen)
  const { isLogIn } = useContext(AuthContext)
  const dispatch = useDispatch()

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
        isLogIn ?
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
          <Routes>
            <Route path={Paths.DEFAULT} element={<SignInScreen />} />
            <Route path={Paths.SIGN_UP} element={<SignUpScreen />} />
          </Routes>
      }
    </MSContainer >
  );
}
export default App;

const styles = {
  appContainer: {
    height: "100%",
    width: "100%"
  }
}

//TODOS
// about us mobil responsive styleını yaz.
// style'ları tek bir style objesinde topla.
// responsive creator'ı her yerde kullan.(bazıyerlerde window'size kullanıyorsun.).
// İnputların wrong text style düzenlemesi.
// restaurantların mobile tasarımları iyileştirilmeli.
// menülerin mobile tasarımları iyileştirilmeli (cardların boyutları vs yeniden düzenlenecek).
// giriş yaparken token alınmalı. Hatalı giriş gibi durumlarda dönülecek hata mesajları düzenlenmeli.
// modal düzenlenmeli, modalda dönülecek hata mesajları belirlenmeli, gereken zamanlar için modal hazırlanmalı(sistemsel giriş yapılamaması vs.).
// local storage eklenmeli.
// logOut olunca localStorage silinmeli.
// token süresi bitince logOut olmalı.
// view1 menü için cardlara flip özelliği ve arkasına bakma özelliği getirilmeli.
// skeleton loading yapılmalı.
// menü ekranında iken navbarda restaurants aktif olmamalı.
