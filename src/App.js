import React from "react"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import Navbar from './components/navbar/Navbar';
import { Paths } from './enums/Paths';
import { MenuScreen, RestaurantListScreen } from './screens/restaurantScreens';
import { AboutUsScreen, SignInScreen, SignUpScreen } from './screens/homeScreens';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isLogIn } = useContext(AuthContext);
  return (
    <div className='App'>
      <Navbar />
      {
        localStorage.getItem('isLogIn') === "true" || isLogIn === true ?
          <Routes>
            <Route path={Paths.DEFAULT} element={< RestaurantListScreen />} />
            <Route path={`${Paths.MENU}/:id`} element={<MenuScreen />} />
          </Routes>
          :
          <Routes>
            <Route path={Paths.DEFAULT} element={<SignInScreen />} />
            <Route path={Paths.ABOUT_US} element={<AboutUsScreen />} />
            <Route path={Paths.SIGN_UP} element={<SignUpScreen />} />
          </Routes>
      }
      {/* <ErrorCard /> */}
      {/* <Footer /> */}
    </div >
  );
}
export default App;
