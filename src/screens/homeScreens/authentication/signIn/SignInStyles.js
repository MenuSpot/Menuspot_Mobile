import { MSColorPalette, MSFonts } from "../../../../assets/ui"

//#region Large device styles
export const componentStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(${MSColorPalette.gradientBackground.gradientBgColor1}, ${MSColorPalette.gradientBackground.gradientBgColor2})`,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
}
export const titleStyle = {
    marginTop: "-10px",
    color: MSColorPalette.text500,
    fontFamily: MSFonts.MerriweatherBold100.fontFamily,
    fontSize: MSFonts.MerriweatherBold100.fontSize,
    fontWeight: MSFonts.MerriweatherBold100.fontWeight
}
export const inputStyle = {
    width: "488px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    padding: "12px 50px",
    border: `1px solid ${MSColorPalette.white}`,
    borderRadius: "76.565px",
    backgroundColor: "transparent",
    outline: "none"
}
export const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
}
export const buttonStyle = {
    display: "flex",
    width: "488px",
    height: "52px",
    padding: " 12.977px 20.763px",
    borderRadius: "31.145px",
    justifyContent: "center",
    alignItems: "center",
    gap: "5.191px",
    backgroundColor: MSColorPalette.primary500,
    border: `1px solid ${MSColorPalette.primary500}`,
    color: MSColorPalette.buttonTextColor,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    cursor: "pointer"
}
export const disabledButtonStyle = {
    display: "flex",
    width: "488px",
    height: "52px",
    padding: " 12.977px 20.763px",
    borderRadius: "31.145px",
    justifyContent: "center",
    alignItems: "center",
    gap: "5.191px",
    backgroundColor: MSColorPalette.primary200,
    border: `1px solid transparent`,
    color: MSColorPalette.primary600,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    cursor: "not-allowed"
}
export const orText = {
    color: MSColorPalette.text400,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight
}
export const haveAccountText = {
    color: MSColorPalette.text400,
    fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
    fontSize: MSFonts.MerriweatherRegular100.fontSize,
    fontWeight: MSFonts.MerriweatherRegular100.fontWeight
}
export const signInLink = {
    textDecoration: "none",
    color: MSColorPalette.primary700,
    fontFamily: MSFonts.MerriweatherBold25.fontFamily,
    fontSize: MSFonts.MerriweatherBold25.fontSize,
    fontWeight: MSFonts.MerriweatherBold25.fontWeight
}
//#endregion

//#region Small device styles
export const componentMobileStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(${MSColorPalette.gradientBackground.gradientBgColor1}, ${MSColorPalette.gradientBackground.gradientBgColor2})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
}
export const brandContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 28
}
export const brandName = {
    color: MSColorPalette.brandName,
    width: "239.809px",
    height: "31px",
    textAlign: "center",
    fontFamily: MSFonts.MerriweatherBold100.fontFamily,
    fontSize: MSFonts.MerriweatherBold100.fontSize,
    fontWeight: MSFonts.MerriweatherBold100.fontWeight,
}
export const titleMobileStyle = {
    display: "none"
}
export const inputMobileStyle = {
    width: "382px",
    height: "44px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    padding: "12.977px 50px",
    border: `1px solid ${MSColorPalette.white}`,
    borderRadius: "76.565px",
    backgroundColor: "transparent",
    outline: "none",
}
export const buttonMobileStyle = {
    display: "flex",
    width: "382px",
    height: "56px",
    padding: " 8px 12px",
    borderRadius: "31.145px",
    justifyContent: "center",
    alignItems: "center",
    gap: "5.191px",
    backgroundColor: MSColorPalette.primary500,
    border: `1px solid ${MSColorPalette.primary500}`,
    color: MSColorPalette.buttonTextColor,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    cursor: "pointer"
}
export const disabledButtonMobileStyle = {
    display: "flex",
    width: "382px",
    height: "56px",
    padding: " 8px 12px",
    borderRadius: "31.145px",
    justifyContent: "center",
    alignItems: "center",
    gap: "5.191px",
    backgroundColor: MSColorPalette.primary200,
    border: `1px solid transparent`,
    color: MSColorPalette.primary600,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    cursor: "not-allowed"
}
//#endregion

