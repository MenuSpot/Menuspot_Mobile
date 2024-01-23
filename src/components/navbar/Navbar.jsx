import React, { useState } from 'react'
import { MSColorPalette, MSFonts } from '../../assets/ui';
import { MSContainer, MSLink, MSText } from '..';
import { SVGHamburgerMenu, SVGLogOut, SVGMenuSpot } from '../../assets/svg';
import { Paths } from '../../enums/Paths';
import { localize } from '../../localization/localize';
import { useDispatch, useSelector } from 'react-redux';
import { isMobileDevice, openHamburgerMenu } from '../../store/slices/innerWidthSlice';
import { NavbarRoutes } from '../../enums/NavbarRoutes';
import { getClassName, navbarRouteMapper } from './utils';

export const Navbar = () => {
    const dispatch = useDispatch()
    const isMobile = useSelector(isMobileDevice)
    const [activeLink, setActiveLink] = useState("");

    return (
        <>
            {
                isMobile ?
                    < MSContainer style={navbarMobile} >
                        <MSContainer style={navItemsMobile}>
                            <SVGHamburgerMenu onClick={() => dispatch(openHamburgerMenu())} />
                            <MSLink to={Paths.DEFAULT} style={brandAreaMobile}>
                                <SVGMenuSpot style={logoMobile} />
                                <MSText style={logoTextMobile}>MENUSPOT</MSText>
                            </MSLink>
                            <MSContainer style={logOutMobile}><SVGLogOut /></MSContainer>
                        </MSContainer >
                    </MSContainer >
                    :
                    <MSContainer style={navbar}>
                        <MSContainer style={navItems}>
                            <MSLink to={Paths.DEFAULT} style={brandArea}>
                                <SVGMenuSpot style={logoStyle} />
                                <MSText style={logoText}>MENUSPOT</MSText>
                            </MSLink>
                            <MSContainer style={features}>
                                {
                                    Object.keys(NavbarRoutes).map(route => (
                                        <MSLink
                                            key={route}
                                            to={NavbarRoutes[route]}
                                            style={getClassName(route, activeLink) === "active" ? currentLink : link}
                                            onClick={() => setActiveLink(navbarRouteMapper(route))}
                                        >
                                            {localize(navbarRouteMapper(route))}
                                        </MSLink>
                                    ))
                                }
                                <MSContainer style={link}>{localize("Options")}</MSContainer>
                                <MSContainer style={logOut}><SVGLogOut /></MSContainer>
                            </MSContainer>
                        </MSContainer>
                    </MSContainer >
            }</>
    )
}
//#region large device styles
const navbar = {
    width: "100%",
    padding: "10px 190px", //burada 190px yerine 12vw yazılabilir. Responsive uygun ayarlanıyor.
    backgroundColor: MSColorPalette.primary500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const navItems = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
}
const brandArea = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none"
}
const logoStyle = {
    width: "75",
    height: "49"
}
const logoText = {
    marginTop: "12px",
    marginLeft: "5px",
    color: MSColorPalette.brandName,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
}
const features = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
}
const link = {
    textDecoration: "none",
    padding: "10px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
    lineHeight: "16px",
}

const currentLink = {
    backgroundColor: MSColorPalette.primary700,
    textDecoration: "none",
    padding: "10px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
    lineHeight: "16px",
    borderRadius: "8px"
}

const logOut = {
    cursor: "pointer"
}
//#endregion

//#region small device styles
const navbarMobile = {
    width: "100%",
    backgroundColor: MSColorPalette.primary500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
}
const navItemsMobile = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
}
const brandAreaMobile = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
}
const logoMobile = {
    width: "57px",
    height: "38px"
}

const logoTextMobile = {
    marginTop: "12px",
    marginLeft: "5px",
    color: MSColorPalette.brandName,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
}

const linkMobile = {
    textDecoration: "none",
    padding: "10px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
    lineHeight: "16px",
}
const logOutMobile = {
    cursor: "pointer"
}
//#endregion
export default Navbar