import { NavbarRoutes } from "../../enums/NavbarRoutes";


export const navbarRouteMapper = (route) => {
    if (NavbarRoutes[route] === NavbarRoutes.ABOUT_US) {
        return "About Us";
    }
    else if (NavbarRoutes[route] === NavbarRoutes.RESTAURANTS) {
        return "Restaurants";
    }
    else return "Restaurants";
}

export const getClassName = (route, activeLink) => {
    const currentRoute = navbarRouteMapper(route);
    return (activeLink === currentRoute || (activeLink === "" && currentRoute === "Restaurants")) ? "active" : "";
}
