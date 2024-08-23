import { MSColorPalette } from "../../../assets/ui"
import { ColorPalette } from "../../../assets/ui/ColorPalette"

export const HamburgerMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    gap: "24px",
    backgroundColor: ColorPalette.secondary100,
    zIndex: 10,
    padding: 20
}
export const linkContainer = {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 2px",
    gap: 20,
}
export const HamburgerLinkStyle = {
    display: "flex",
    width: "100%",
    height: "44px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    textDecoration: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: MSColorPalette.white,
    backgroundColor: MSColorPalette.primary300,
}
export const currentLinkForHamburger = {
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
