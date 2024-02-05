import React, { useContext, useEffect, useState } from 'react'
import { MSContainer, MSLink } from '../..'
import { SVGLogOut } from '../../../assets/svg'
import { NavbarRoutes } from '../../../enums/NavbarRoutes'
import { navbarRouteMapper, setActiveLinkforHamburger } from '../utils'
import { localize } from '../../../localization/localize'
import { useDispatch } from 'react-redux'
import { openHamburgerMenu } from '../../../store/slices/innerWidthSlice'
import { HamburgerLinkStyle, HamburgerMenuStyle } from './HamburgerMenuStyles'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { Paths } from '../../../enums/Paths'

const HamburgerMenu = ({ style }) => {
    const { onSignOut } = useContext(AuthContext)

    const dispatch = useDispatch();
    const [pathname, setPathname] = useState("");

    useEffect(() => {
        const url = window.location.pathname
        setPathname(navbarRouteMapper(url))
    }, [])


    const handleLogOut = () => {
        onSignOut()
        Navigate(Paths.DEFAULT)
    }

    return (
        <MSContainer style={{ ...HamburgerMenuStyle, ...style }}>
            {
                Object.keys(NavbarRoutes).map(route => (
                    <MSLink
                        key={route}
                        to={NavbarRoutes[route]}
                        style={setActiveLinkforHamburger(route, pathname)}
                        onClick={() => {
                            setPathname(navbarRouteMapper(route))
                            dispatch(openHamburgerMenu())
                        }}
                    >
                        {localize(navbarRouteMapper(route))}
                    </MSLink>
                ))
            }
            <MSLink style={HamburgerLinkStyle}>Options</MSLink>
            <MSContainer style={HamburgerLinkStyle} onClick={() => handleLogOut()}>
                <SVGLogOut />
            </MSContainer>
        </MSContainer >
    )
}

export default HamburgerMenu