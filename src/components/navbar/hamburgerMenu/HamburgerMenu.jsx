import React, { useContext, useEffect, useState } from 'react'
import { MSContainer, MSLink } from '../..'
import { SVGLogOut } from '../../../assets/svg'
import { NavbarRoutes } from '../../../enums/NavbarRoutes'
import { navbarRouteMapper, setActiveLinkforHamburger } from '../utils'
import { localize } from '../../../localization/localize'
import { useDispatch, useSelector } from 'react-redux'
import { openHamburgerMenu } from '../../../store/slices/innerWidthSlice'
import { HamburgerLinkStyle, HamburgerMenuStyle, linkContainer } from './HamburgerMenuStyles'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { Paths } from '../../../enums/Paths'

const HamburgerMenu = () => {
    const { isHamburgerOpen: hamburgerMenu } = useSelector((state) => state.innerWidthSlice)
    const { onSignOut } = useContext(AuthContext)
    const [pathname, setPathname] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const url = window.location.pathname;

    useEffect(() => {
        setPathname(navbarRouteMapper(url))
    }, [url])

    const handleLogOut = () => {
        onSignOut()
        navigate(Paths.DEFAULT)
    }

    return (
        <MSContainer style={{ ...HamburgerMenuStyle, display: hamburgerMenu ? "flex" : "none" }}>
            <MSContainer style={linkContainer}>
                {
                    Object.keys(NavbarRoutes).map(route => (
                        <MSLink
                            key={route}
                            to={NavbarRoutes[route]}
                            style={setActiveLinkforHamburger(route, pathname)}
                            onClick={() => {
                                dispatch(openHamburgerMenu())
                            }}
                        >
                            {localize(navbarRouteMapper(route))}
                        </MSLink>
                    ))
                }
                <MSContainer style={HamburgerLinkStyle} onClick={handleLogOut}>
                    <SVGLogOut />
                </MSContainer>
            </MSContainer>
        </MSContainer >
    )
}

export default HamburgerMenu