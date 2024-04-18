import { NavbarRoutes } from "../../enums/NavbarRoutes";
import { HamburgerLinkStyle, currentLinkForHamburger } from "./hamburgerMenu/HamburgerMenuStyles";
import { currentLink, linkStyle, onHover } from "./NavbarStyles";

export const navbarRouteMapper = (route) => {
    if (NavbarRoutes[route] === NavbarRoutes.ABOUT_US) {
        return "About Us";
    }
    else if (NavbarRoutes[route] === NavbarRoutes.RESTAURANTS) {
        return "Restaurants";
    }
    // else if (route === "/AboutUs") {
    //     return "About Us"
    // }
    else if (route === "/") {
        return "Restaurants"
    }
    else return ""
}

export const setActiveLink = (route, pathname, isHovered) => {
    const currentRoute = navbarRouteMapper(route);
    if (pathname === currentRoute) {
        return currentLink
    } else if (isHovered === route) {
        return onHover
    } else return linkStyle
}

export const setActiveLinkforHamburger = (route, pathname) => {
    const currentRoute = navbarRouteMapper(route);
    if (pathname === currentRoute) {
        return currentLinkForHamburger
    } else return HamburgerLinkStyle
}