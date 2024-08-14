import { MSColorPalette, MSFonts } from "../../../../assets/ui"
import { ColorPalette } from "../../../../assets/ui/ColorPalette"
import { Fonts } from "../../../../assets/ui/Fonts"

//#region Large device styles
export const componentStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(${ColorPalette.gradientBackground.gradientBgColor1}, ${ColorPalette.gradientBackground.gradientBgColor2})`,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
}
export const titleStyle = {
    marginTop: "-10px",
    color: ColorPalette.text500,
    fontFamily: Fonts.MerriweatherBold100.fontFamily,
    fontSize: Fonts.MerriweatherBold100.fontSize,
    fontWeight: Fonts.MerriweatherBold100.fontWeight
}
export const inputStyle = {
    width: "488px",
    color: ColorPalette.white,
    fontFamily: Fonts.MerriweatherRegular200.fontFamily,
    fontSize: Fonts.MerriweatherRegular200.fontSize,
    fontWeight: Fonts.MerriweatherRegular200.fontWeight,
    padding: "12px 48px",
    border: `1px solid ${ColorPalette.white}`,
    borderRadius: "76.565px",
    backgroundColor: "transparent",
    outline: "none"
}
export const inputRed = {
    backgroundColor: "red"
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
    backgroundColor: ColorPalette.primary500,
    border: `1px solid ${ColorPalette.primary500}`,
    color: ColorPalette.buttonTextColor,
    fontFamily: Fonts.MerriweatherRegular200.fontFamily,
    fontSize: Fonts.MerriweatherRegular200.fontSize,
    fontWeight: Fonts.MerriweatherRegular200.fontWeight,
}
export const orText = {
    color: ColorPalette.text400,
    fontFamily: Fonts.MerriweatherBold25.fontFamily,
    fontSize: Fonts.MerriweatherBold25.fontSize,
    fontWeight: Fonts.MerriweatherBold25.fontWeight
}
export const haveAccountText = {
    color: ColorPalette.text400,
    fontFamily: Fonts.MerriweatherRegular100.fontFamily,
    fontSize: Fonts.MerriweatherRegular100.fontSize,
    fontWeight: Fonts.MerriweatherRegular100.fontWeight
}
export const signInLink = {
    textDecoration: "none",
    color: ColorPalette.primary700,
    fontFamily: Fonts.MerriweatherBold25.fontFamily,
    fontSize: Fonts.MerriweatherBold25.fontSize,
    fontWeight: Fonts.MerriweatherBold25.fontWeight
}
export const errorMessage = {
    color: MSColorPalette.errorTextColor,
    paddingLeft: "10px",
    paddingTop: "3px"
}
export const errorInput = {
    borderColor: MSColorPalette.errorInputColor
}
//#endregion
//#region Small device styles
export const componentMobileStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(${ColorPalette.gradientBackground.gradientBgColor1}, ${ColorPalette.gradientBackground.gradientBgColor2})`,
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
    color: ColorPalette.brandName,
    width: "239.809px",
    height: "31px",
    textAlign: "center",
    fontFamily: Fonts.MerriweatherBold100.fontFamily,
    fontSize: Fonts.MerriweatherBold100.fontSize,
    fontWeight: Fonts.MerriweatherBold100.fontWeight,
}
export const titleMobileStyle = {
    display: "none"
}
export const inputMobileStyle = {
    width: "90%",
    height: "44px",
    color: MSColorPalette.white,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    padding: "8px 45px",
    border: `1px solid ${MSColorPalette.white}`,
    borderRadius: "76.565px",
    backgroundColor: "transparent",
    outline: "none",
}
export const buttonMobileStyle = {
    display: "flex",
    height: "56px",
    width: "90%",
    padding: "8px 45px",
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
    cursor: "pointer",
}
//#endregion