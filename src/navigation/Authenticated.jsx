import { Route, Routes } from "react-router-dom"
import { Paths } from "../enums/Paths"
import { MenuScreen, RestaurantListScreen } from "../screens/restaurantScreens"
import { AboutUsScreen } from "../screens/homeScreens"
import Navbar from "../components/navbar/navbarOverlay/Navbar"
import HamburgerMenu from "../components/navbar/hamburgerMenu/HamburgerMenu"
import Footer from "../components/footer/Footer"

const Authenticated = () => {
    return (
        <>
            <Navbar />
            <HamburgerMenu />
            <Routes>
                <Route path={Paths.DEFAULT} element={<RestaurantListScreen />} />
                <Route path={`${Paths.MENU}/:id/:name`} element={<MenuScreen />} />
                <Route path={Paths.ABOUT_US} element={<AboutUsScreen />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Authenticated