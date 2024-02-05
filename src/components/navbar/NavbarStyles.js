import { MSColorPalette, MSFonts } from "../../assets/ui"

//#region large device styles
export const navbar = {
    width: "100%",
    padding: "10px 190px", //burada 190px yerine 12vw yazılabilir. Responsive uygun ayarlanıyor.
    backgroundColor: MSColorPalette.primary500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
export const navItems = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
}
export const brandArea = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none"
}
export const logoStyle = {
    width: "75",
    height: "49"
}
export const logoText = {
    marginTop: "12px",
    marginLeft: "5px",
    color: MSColorPalette.brandName,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
}
export const features = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
}
export const linkStyle = {
    textDecoration: "none",
    padding: "10px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
    lineHeight: "16px",
}
export const currentLink = {
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
export const onHover = {
    textDecoration: "none",
    padding: "10px",
    color: MSColorPalette.white,
    backgroundColor: MSColorPalette.primary300,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
    lineHeight: "16px",
    borderRadius: "8px"
}
export const logOut = {
    cursor: "pointer"
}
//#endregion
//#region small device styles
export const navbarMobile = {
    width: "100%",
    backgroundColor: MSColorPalette.primary500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer"
}
export const navItemsMobile = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
}
export const brandAreaMobile = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
}
export const logoMobile = {
    width: "57px",
    height: "38px"
}
export const logoTextMobile = {
    marginTop: "12px",
    marginLeft: "5px",
    color: MSColorPalette.brandName,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight,
}
export const logOutMobile = {
    cursor: "pointer"
}
//#endregion