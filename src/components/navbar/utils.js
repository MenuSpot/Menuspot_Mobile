import { NavbarRoutes } from "../../enums/NavbarRoutes";
import { HamburgerLinkStyle, currentLinkForHamburger } from "./hamburgerMenu/HamburgerMenuStyles";
import { currentLink, linkStyle, onHover } from "./navbarOverlay/NavbarStyles";

export const navbarRouteMapper = (route) => {
    if (NavbarRoutes[route] === NavbarRoutes.ABOUT_US || route === "/AboutUs") {
        return "About Us";
    }
    if (NavbarRoutes[route] === NavbarRoutes.RESTAURANTS) {
        return "Restaurants";
    }
    if (route === "/") {
        return "Restaurants"
    }
    return ""
}

export const setActiveLink = (route, pathname, isHovered) => {
    const currentRoute = navbarRouteMapper(route);
    if (pathname === currentRoute) {
        return currentLink
    }
    if (isHovered === route) {
        return onHover
    }
    return linkStyle
}

export const setActiveLinkforHamburger = (route, pathname) => {
    const currentRoute = navbarRouteMapper(route);
    if (pathname === currentRoute) {
        return currentLinkForHamburger
    }
    return HamburgerLinkStyle
}