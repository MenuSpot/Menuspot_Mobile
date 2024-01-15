import React, { useContext } from "react"
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Paths } from './enums/Paths';
import { AboutUsScreen, SignInScreen, SignUpScreen } from "./screens/homeScreens";
import { AuthContext } from "./context/AuthContext";
import { MenuScreen, RestaurantListScreen } from "./screens/restaurantScreens";
import { MSContainer } from "./components";

const App = () => {

  const { isLogIn } = useContext(AuthContext)

  return (
    <MSContainer className='App'>
      {
        isLogIn ?
          <>
            <Navbar />
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
// Navbar ve restaurantlist responsive uyarla. 
// userInfo girmeyince inaktif buton ve not-allowed cursor.
// yazılan şifreyi görünür kıl icon da ona göre değişsin.
// bilgiler girilmeden önce button disabled olsun ve cursor not allowed.
// width değerlerini vw ile responsive'e uyarla.