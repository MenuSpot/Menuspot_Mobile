import React, { useContext, useEffect, useState } from 'react'
import { MSContainer, MSLink, MSText } from '..';
import { SVGHamburgerMenu, SVGLogOut, SVGMenuSpot } from '../../assets/svg';
import { Paths } from '../../enums/Paths';
import { localize } from '../../localization/localize';
import { useDispatch, useSelector } from 'react-redux';
import { openHamburgerMenu } from '../../store/slices/innerWidthSlice';
import { NavbarRoutes } from '../../enums/NavbarRoutes';
import { setActiveLink, navbarRouteMapper } from './utils';
import { brandArea, brandAreaMobile, features, linkStyle, logOut, logOutMobile, logoMobile, logoStyle, logoText, logoTextMobile, navItems, navItemsMobile, navbar, navbarMobile } from './NavbarStyles';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const { onSignOut } = useContext(AuthContext)
    const dispatch = useDispatch()
    const { isMobileDevice: isMobile } = useSelector((state) => state.innerWidthSlice)
    const [pathname, setPathname] = useState("");
    const [hoveredItem, setHoveredItem] = useState("");
    const navigate = useNavigate()

    const handleLogOut = () => {
        navigate(Paths.DEFAULT)
        onSignOut()
    }
    useEffect(() => {
        const url = window.location.pathname
        setPathname(navbarRouteMapper(url))
    }, [pathname])

    return (
        <>
            {
                isMobile ?
                    < MSContainer style={navbarMobile} >
                        <MSContainer style={navItemsMobile}>
                            <SVGHamburgerMenu onClick={() => dispatch(openHamburgerMenu())} />
                            <MSLink to={Paths.DEFAULT} style={brandAreaMobile}>
                                <SVGMenuSpot style={logoMobile} />
                                <MSText style={logoTextMobile}>{localize("MENUSPOT")}</MSText>
                            </MSLink>
                            <MSContainer style={logOutMobile} onClick={handleLogOut}><SVGLogOut /></MSContainer>
                        </MSContainer >
                    </MSContainer >
                    :
                    <MSContainer style={navbar}>
                        <MSContainer style={navItems}>
                            <MSLink to={Paths.DEFAULT} style={brandArea}>
                                <SVGMenuSpot style={logoStyle} />
                                <MSText style={logoText}>{localize("MENUSPOT")}</MSText>
                            </MSLink>
                            <MSContainer style={features}>
                                {
                                    Object.keys(NavbarRoutes).map(route => (
                                        <MSLink
                                            key={route}
                                            to={NavbarRoutes[route]}
                                            style={setActiveLink(route, pathname, hoveredItem)}
                                            onClick={() => setPathname(navbarRouteMapper(route))}
                                            onMouseEnter={() => setHoveredItem(route)}
                                            onMouseLeave={() => setHoveredItem("")}
                                        >
                                            {localize(navbarRouteMapper(route))}
                                        </MSLink>
                                    ))
                                }
                                <MSContainer style={linkStyle}>{localize("Options")}</MSContainer>
                                <MSContainer style={logOut} onClick={handleLogOut}><SVGLogOut /></MSContainer>
                            </MSContainer>
                        </MSContainer>
                    </MSContainer >
            }</>
    )
}
export default Navbar