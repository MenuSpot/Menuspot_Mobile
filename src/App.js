import React, { useContext, useEffect } from "react"
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Paths } from './enums/Paths';
import { AboutUsScreen, SignInScreen, SignUpScreen } from "./screens/homeScreens";
import { AuthContext } from "./context/AuthContext";
import { MenuScreen, RestaurantListScreen } from "./screens/restaurantScreens";
import { MSContainer } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { changeScreenSize, isHamburgerOpen } from "./store/slices/innerWidthSlice";
import HamburgerMenu from "./components/navbar/HamburgerMenu";

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
    <MSContainer className='App'>
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
// Navbarda ögelerin hover ve clicked tasarımları.
// İnputların wrong text style düzenlemesi.
// restaurantların mobile tasarımları iyileştirilmeli
// menülerin mobile tasarımları iyileştirilmeli (cardların boyutları vs yeniden düzenlenecek)
// giriş yaparken token alınmalı. Hatalı giriş gibi durumlarda dönülecek hata mesajları düzenlenmeli.
// modal düzenlenmeli, modalda dönülecek hata mesajları belirlenmeli, gereken zamanlar için modal hazırlanmalı(sistemsel giriş yapılamaması vs.)
// local storage eklenmeli.
// logOut fonksiyonu eklenmeli, logOut olunca localStorage silinmeli.
// token süresi bitince logOut olmalı.
// view1 menü için cardlara flip özelliği ve arkasına bakma özelliği getirilmeli.
// skeleton loading yapılmalı.
// menü ekranında iken navbarda restaurants aktif olmamalı.
// footer eklenmeli.
// tüm yazı tipleri ui elemanları vs gözden geçir.