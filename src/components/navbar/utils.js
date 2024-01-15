import { NavbarRoutes, navbarLogInRoutes } from "../../enums/NavbarRoutes";


export const navbarRouteMapper = (route) => {
    if (NavbarRoutes[route] === NavbarRoutes.ABOUT_US) {
        return "About Us";
    }
    else if (NavbarRoutes[route] === NavbarRoutes.DEFAULT) {
        return "Sign In";
    }
    else if (navbarLogInRoutes[route] === navbarLogInRoutes.SIGN_OUT) {
        return "Sign Out"
    }
    else if (navbarLogInRoutes[route] === navbarLogInRoutes.MENUS) {
        return "Menus"
    }
    else return "Sign Up";
}

export const getClassName = (route, activeLink) => {
    const currentRoute = navbarRouteMapper(route);
    return (
        `features-li ${activeLink === currentRoute || (activeLink === "" && currentRoute === "Sign In" || activeLink === "" && currentRoute === "Menus") ? "active" : ""}`
    )
}

export const getClassNameForMobile = (route, activeLink) => {
    const currentRoute = navbarRouteMapper(route);
    return `menu-content_ul_li ${activeLink === currentRoute || (activeLink === "" && currentRoute === "Sign In") ? "active" : ""}`
}