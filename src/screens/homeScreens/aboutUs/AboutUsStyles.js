import { MSColorPalette, MSFonts } from "../../../assets/ui"

//#region large device style
export const component = {
    width: "100%",
    height: "100%",
    minHeight: "2000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "40px 138px",
}
export const descriptionText = {
    color: MSColorPalette.text500,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontWeigh: MSFonts.MerriweatherRegular200.fontWeight,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    lineHeight: "40px",
    width: "100%",
}
export const team = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px"
}
export const titleTeam = {
    color: MSColorPalette.primary700,
    fontFamily: MSFonts.MerriweatherRegular300.fontFamily,
    fontWeight: MSFonts.MerriweatherRegular300.fontWeight,
    fontSize: MSFonts.MerriweatherRegular300.fontSize,
    textAlign: "center",
    marginBottom: "31px",
    marginTop: "20px"
}
export const list = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "31px",
    flexWrap: "wrap"
}
export const listItem = {
    width: "275px",
    gap: "23px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "center",
}
export const title = {
    color: MSColorPalette.primary500,
    fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
    fontSize: MSFonts.MerriweatherRegular100.fontSize,
    fontWeight: MSFonts.MerriweatherRegular100.fontWeight,
}
export const name = {
    color: MSColorPalette.text500,
    fontFamily: MSFonts.MerriweatherItalic50.fontFamily,
    fontSize: MSFonts.MerriweatherItalic50.fontSize,
    fontWeight: MSFonts.MerriweatherItalic50.fontWeight,
    fontStyle: MSFonts.MerriweatherItalic50.fontStyle
}
export const personalInfo = {
    display: "flex",
    width: "1200px",
    height: "auto",
    gap: "30px",
}
export const personalInfoCard = {
    gap: "23px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "center",
    marginRight: "30px",
    width: "275px",
}
//#endregion

//#region medium device style
export const mediumComponentStyle = {
    height: "100%",
    // minHeight: "1060px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    lineHeight: "25px",
    fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
    fontSize: MSFonts.MerriweatherRegular100.fontSize,
    fontWeight: MSFonts.MerriweatherRegular100.fontWeight,
}
//#endregion

//#region small device style
export const mobileComponentStyle = {
    height: "auto",
    minHeight: "800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    lineHeight: "25px",
    fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
    fontSize: MSFonts.MerriweatherRegular100.fontSize,
    fontWeight: MSFonts.MerriweatherRegular100.fontWeight,
}
export const personalInfoMobile = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
}
export const personalInfoCardMobile = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px"
}
export const descriptionMobileText = {
    paddingTop: "20px"
}
export const listMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "30px"
}
export const listItemMobile = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    width: "140px",
}
export const imageMobileStyle = {
    height: "110px"
}
export const titleMobile = {
    fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
    fontSize: MSFonts.MerriweatherRegular100.fontSize,
    fontWeight: MSFonts.MerriweatherRegular100.fontWeight,
    color: MSColorPalette.primary500,
    width: "100%",
    textAlign: "center"
}
export const nameMobile = {
    fontFamily: MSFonts.MerriweatherItalic25.fontFamily,
    fontSize: MSFonts.MerriweatherItalic25.fontSize,
    fontWeight: MSFonts.MerriweatherItalic25.fontWeight,
    fontStyle: MSFonts.MerriweatherItalic25.fontStyle,
    color: MSColorPalette.text500
}
//#endregion