import React, { useContext, useEffect, useState } from 'react'
import { getClassName, navbarRouteMapper } from './utils';
import { NavbarRoutes, navbarLogInRoutes } from '../../enums/NavbarRoutes';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Navbar = () => {
    //#region useStates
    const [activeLink, setActiveLink] = useState("");
    // const { isLogIn, logOut } = useContext(AuthContext);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    //#endregion

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        console.log(windowSize)
        window.addEventListener("resize", handleSize)
        return () => window.removeEventListener("resize", handleSize)
    }, [])

    return (
        <div className='navbar-wrapper' style={windowSize.width < 500 ? styles.bg : styles.container}>
            <div className='logo' >
            </div>
            <div className='brand-name'><a href="#">Menuspot</a></div>

            <div className='features'>
                <ul className='features-ul'>
                    {
                        // !isLogIn ? 
                        true ?
                            Object.keys(NavbarRoutes).map((route) => {
                                return (
                                    <Link
                                        key={route}
                                        onClick={() => setActiveLink(navbarRouteMapper(route))}
                                        to={NavbarRoutes[route]}
                                        className={getClassName(route, activeLink)}
                                    >
                                        {navbarRouteMapper(route)}
                                    </Link>
                                )
                            })
                            :
                            Object.keys(navbarLogInRoutes).map((route) => {
                                return (
                                    <Link
                                        key={route}
                                        onClick={() => {
                                            if (route === "SIGN_OUT") {
                                                // logOut()
                                            }
                                            setActiveLink(navbarRouteMapper(route))
                                        }}
                                        to={NavbarRoutes[route]}
                                        className={getClassName(route, activeLink)}
                                    >
                                        {navbarRouteMapper(route)}
                                    </Link>
                                )
                            })
                    }
                </ul>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        width: "100%",
    },
    bg: {
        backgroundColor: "red",
        display: "flex",
        width: "100%",
    }
}


export default Navbar
