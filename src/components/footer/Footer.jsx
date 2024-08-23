import React from 'react'
import { MSColorPalette, MSFonts } from '../../assets/ui'
import { MSContainer, MSText } from '..'

const Footer = () => {
    return (
        <MSContainer style={styles.container}>
            <MSText style={styles.footerText}>ALL RIGHTS RESERVED</MSText>
        </MSContainer>
    )
}
export default Footer

const styles = {
    container: {
        height: "48px",
        width: "100%",
        padding: "12px",
        backgroundColor: MSColorPalette.primary500,
        display: "flex",
        justifyContent: "center",
        aligItems: "center",
        postition: "relative",
        bottom: 0,
        marginTop: "40px"
    },
    footerText: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",        
        color: MSColorPalette.secondary500,
        fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
        fontSize: MSFonts.MerriweatherRegular50.fontSize,
        fontWeight: MSFonts.MerriweatherRegular50.fontWeight,
    }
}