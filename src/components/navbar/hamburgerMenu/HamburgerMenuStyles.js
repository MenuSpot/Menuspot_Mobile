import { MSColorPalette } from "../../../assets/ui"

export const HamburgerMenuStyle = {
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
export const HamburgerLinkStyle = {
    display: "flex",
    height: "44px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
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
