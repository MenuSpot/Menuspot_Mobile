import { MSColorPalette, MSFonts } from "../../../assets/ui"

//#region region large device styles
export const componentStyle = {
    height: "100%",
    width: "100%",
    backgroundColor: "MSColorPalette.restaurantBgColor",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
export const containerStyle = {
    width: "900px",
    marginTop: "24px",
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    gap: 24,
    flexWrap: "wrap"
}
export const toolbar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: MSColorPalette.secondary300,
    width: "100%",
    height: "62px",
    padding: "0 16px",
    borderRadius: "8px"
}
export const restaurantName = {
    color: MSColorPalette.text500,
    fontSize: MSFonts.MerriweatherBold50.fontSize,
    fontFamily: MSFonts.MerriweatherBold50.fontFamily,
    fontWeight: MSFonts.MerriweatherBold50.fontWeight,
}
export const filter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer"
}
export const chosenView = {
    display: "flex",
    padding: "2px 10px",
    alignItems: "flexStart",
    gap: "10px",
    borderRadius: "8px",
    backgroundColor: MSColorPalette.secondary500,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
}
export const categoryName = {
    width: "192px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    color: MSColorPalette.white,
    backgroundColor: MSColorPalette.primary500,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
}
export const productRow = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    margin: "24px 0px"
}
export const productCardView1 = {
    display: "flex",
    gap: "51px",
    flexWrap: "wrap"
}
export const cardStyleView1 = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    overflow: "hidden",
}
export const cardHeaderStyleView1 = {
    display: "flex",
    justifyContent: "center",
    alignIitems: "center",
    width: "180px",
    height: "40px",
    padding: "8px 12px",
    gap: "10px",
    backgroundColor: MSColorPalette.secondary300,
    fontFamily: MSFonts.MerriweatherLight100.fontFamily,
    fontSize: MSFonts.MerriweatherLight100.fontSize,
    fontWeight: MSFonts.MerriweatherLight100.fontWeight
}
export const cardImageView1 = {
    width: "180px",
    height: "170px"
}
export const cardFooterStyleView1 = {
    display: "flex",
    width: "180px",
    height: "30px",
    padding: "8px 12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    backgroundColor: MSColorPalette.secondary300
}
export const productColumn = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    marginTop: "20px"
}
export const productCardView2 = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
    flexWrap: "wrap",
}
export const cardStyleView2 = {
    display: "flex",
    borderRadius: "8px",
    padding: "12px",
    backgroundColor: MSColorPalette.secondary500,
    gap: "24px"
}
export const cardImageView2 = {
    width: "180px",
    height: "170px",
    borderRadius: "8px"
}
export const cardHeaderStyleView2 = {
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight
}
export const cardProductDescriptionView2 = {
    color: MSColorPalette.text400,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight
}
export const cardPriceStyleView2 = {
    width: "103px",
    height: "32px",
    padding: "4px",
    borderRadius: "8px",
    color: MSColorPalette.white,
    backgroundColor: MSColorPalette.primary500,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    textAlign: "center",
    marginLeft: "auto"
}
export const cardTextArea = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%"
}
//#endregion

//#region small device styles
export const containerMobileStyle = {
    width: "100%",
    marginTop: "24px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 24
}
export const toolbarMobile = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: MSColorPalette.secondary300,
    height: "62px",
    padding: "0 16px",
    borderRadius: "8px"
}
export const menuRowMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
}
export const menuColumnMobile = {

}
//#endregion