import React from 'react'
import { MSContainer, MSLink } from '..'
import { SVGLogOut } from '../../assets/svg'
import { MSColorPalette } from '../../assets/ui'

const HamburgerMenu = ({ style }) => {
    return (

        <MSContainer style={{ ...HamburgerMenuStyle, ...style }}>
            <MSLink style={button}>About Us</MSLink>
            <MSLink style={button}>Menus</MSLink>
            <MSLink style={button}>Options</MSLink>
            <MSContainer style={button}>
                <SVGLogOut />
            </MSContainer>
        </MSContainer >
    )
}
const HamburgerMenuStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    gap: "24px",
    padding: "24px",
    backdropFilter: "blur(2px)",
}
const button = {
    display: "flex",
    height: "44px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    alignSelf: "stretch",
    textDecoration: "none",
    borderRadius: "8px",
    color: MSColorPalette.white,
    backgroundColor: MSColorPalette.primary300,
}
export default HamburgerMenu