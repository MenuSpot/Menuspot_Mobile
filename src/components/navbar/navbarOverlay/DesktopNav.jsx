import React, { useState } from 'react'
import { MSContainer, MSLink, MSText } from '../..'
import { brandArea, features, logOut, logoStyle, logoText, navItems, navbar } from './NavbarStyles'
import { SVGLogOut, SVGMenuSpot } from '../../../assets/svg'
import { NavbarRoutes } from '../../../enums/NavbarRoutes'
import { Paths } from '../../../enums/Paths'
import { localize } from '../../../localization/localize'
import { navbarRouteMapper, setActiveLink } from '../utils'

const DesktopNav = ({ pathname, handleLogOut }) => {
    const [hoveredItem, setHoveredItem] = useState("");
    return (
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
                                onMouseEnter={() => setHoveredItem(route)}
                                onMouseLeave={() => setHoveredItem("")}
                            >
                                {localize(navbarRouteMapper(route))}
                            </MSLink>
                        ))
                    }
                    <MSContainer style={logOut} onClick={handleLogOut}>
                        <SVGLogOut />
                    </MSContainer>
                </MSContainer>
            </MSContainer>
        </MSContainer >
    )
}

export default DesktopNav
