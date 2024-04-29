import { Route, Routes } from "react-router-dom"
import { Paths } from "../enums/Paths"
import { MenuScreen, RestaurantListScreen } from "../screens/restaurantScreens"
import { AboutUsScreen } from "../screens/homeScreens"

const Authenticated = () => {
    return (
        <Routes>
            <Route path={Paths.DEFAULT} element={<RestaurantListScreen />} />
            <Route path={`${Paths.MENU}/:id/:name`} element={<MenuScreen />} />
            <Route path={Paths.ABOUT_US} element={<AboutUsScreen />} />
        </Routes>
    )
}

export default Authenticated