import React, { useState } from 'react'
import { MSContainer, MSLink } from '..'
import { SVGLogOut } from '../../assets/svg'
import { MSColorPalette } from '../../assets/ui'
import { NavbarRoutes } from '../../enums/NavbarRoutes'
import { getClassName, navbarRouteMapper } from './utils'
import { localize } from '../../localization/localize'
import { useDispatch } from 'react-redux'
import { openHamburgerMenu } from '../../store/slices/innerWidthSlice'

const HamburgerMenu = ({ style }) => {
    const [activeLink, setActiveLink] = useState("")
    const dispatch = useDispatch()

    return (
        <MSContainer style={{ ...HamburgerMenuStyle, ...style }}>
            {
                Object.keys(NavbarRoutes).map(route => (
                    <MSLink
                        key={route}
                        to={NavbarRoutes[route]}
                        style={getClassName(route, activeLink) === "active" ? currentLink : link}
                        onClick={() => {
                            setActiveLink(navbarRouteMapper(route))
                            dispatch(openHamburgerMenu())
                        }}
                    >
                        {localize(navbarRouteMapper(route))}
                    </MSLink>
                ))
            }
            <MSLink style={link}>Options</MSLink>
            <MSContainer style={link}>
                <SVGLogOut />
            </MSContainer>
        </MSContainer >
    )
}
const HamburgerMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    gap: "24px",
    padding: "24px",
    backdropFilter: "blur(20px)",
}
const link = {
    display: "flex",
    height: "44px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    textDecoration: "none",
    borderRadius: "8px",
    color: MSColorPalette.white,
    backgroundColor: MSColorPalette.primary300,
}
const currentLink = {
    display: "flex",
    height: "44px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    textDecoration: "none",
    color: MSColorPalette.white,
    backgroundColor: MSColorPalette.primary700,
    borderRadius: "8px"
}
export default HamburgerMenu