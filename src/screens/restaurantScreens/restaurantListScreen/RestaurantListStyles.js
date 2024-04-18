import { MSColorPalette } from "../../../assets/ui"

//#region Large device styles
export const componentStyle = {
    minHeight: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    backgroundColor: MSColorPalette.restaurantBgColor,
}
export const containerStyle = {
    marginTop: "24px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "900px",
    gap: 10
}

//#region Small device style
export const containerStyleMobile = {
    marginTop: "24px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center ",
    width: "900px",
    gap: "25px",
    padding: "0 16px"
}