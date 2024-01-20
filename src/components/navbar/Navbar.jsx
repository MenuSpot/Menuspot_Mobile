import React from 'react'
import { MSColorPalette, MSFonts } from '../../assets/ui';
import NavbarLogoSVG from '../../assets/svg/NavbarLogoSVG';
import { MSContainer, MSLink, MSText } from '..';
import { SVGHamburgerMenu, SVGLogOut } from '../../assets/svg';
import { Paths } from '../../enums/Paths';
import { localize } from '../../localization/localize';
import { useSelector } from 'react-redux';
import { isHamburgerMenu } from '../../store/slices/innerWidthSlice';
import LogOutSVG from '../../assets/svg/LogOutSVG';

export const Navbar = () => {
    //#region useStates
    const isHamburgerMenuOpen = useSelector(isHamburgerMenu)
    // const [activeLink, setActiveLink] = useState("");
    //#endregion

    return (
        <>
            {
                isHamburgerMenuOpen ?
                    < MSContainer style={navbarMobileStyle} >
                        <MSContainer style={navItemsMobileStyle}>
                            < SVGHamburgerMenu />
                            <MSLink to={Paths.DEFAULT} style={logo}>
                                <NavbarLogoSVG />
                                <MSText style={logoText}>MENUSPOT</MSText>
                            </MSLink>
                            <LogOutSVG />
                        </MSContainer >
                    </MSContainer >
                    :
                    <MSContainer style={navbar}>
                        <MSContainer style={navItems}>
                            <MSLink to={Paths.DEFAULT} style={logo}>
                                <NavbarLogoSVG />
                                <MSText style={logoText}>MENUSPOT</MSText>
                            </MSLink>
                            <MSContainer style={features}>
                                <MSLink to={Paths.ABOUT_US} style={link}>{localize("About Us")}</MSLink>
                                <MSLink to={Paths.MENU} style={link}>{localize("Menus")}</MSLink>
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
    alignItems: "center"
}
const navItems = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
}
const logo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none"
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
const logOut = {
    cursor: "pointer"
}
//#endregion

//#region small device styles
const navbarMobileStyle = {
    width: "100%",
    backgroundColor: MSColorPalette.primary500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
}
const navItemsMobileStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
}
// const logoMobileStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     textDecoration: "none"
// }
// const logoTextMobileStyle = {
//     marginTop: "12px",
//     marginLeft: "5px",
//     color: MSColorPalette.brandName,
//     fontFamily: MSFonts.MerriweatherBold25.fontFamily,
//     fontSize: MSFonts.MerriweatherBold25.fontSize,
//     fontWeight: MSFonts.MerriweatherBold25.fontWeight,
// }
// const featuresMobileStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "10px"
// }
// const linkMobileStyle = {
//     textDecoration: "none",
//     padding: "10px",
//     color: MSColorPalette.white,
//     fontFamily: MSFonts.MerriweatherBold25.fontFamily,
//     fontSize: MSFonts.MerriweatherBold25.fontSize,
//     fontWeight: MSFonts.MerriweatherBold25.fontWeight,
//     lineHeight: "16px",
// }
// const logOutMobileStyle = {
//     cursor: "pointer"
// }
//#endregion
export default Navbar