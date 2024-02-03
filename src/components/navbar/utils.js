import { NavbarRoutes } from "../../enums/NavbarRoutes";

export const navbarRouteMapper = (route) => {
    if (NavbarRoutes[route] === NavbarRoutes.ABOUT_US) {
        return "About Us";
    }
    else if (NavbarRoutes[route] === NavbarRoutes.RESTAURANTS) {
        return "Restaurants";
    }
    else if (route === "/AboutUs") {
        return "About Us"
    }
    else if (route === "/") {
        return "Restaurants"
    }
    else return ""
}

export const setActiveLink = (route, pathname) => {
    const currentRoute = navbarRouteMapper(route);
    return (pathname === currentRoute) ? "active" : "";
}