import React from 'react'
import { MSColorPalette, MSFonts } from '../../assets/ui'
import { MSContainer, MSText } from '..'
import { SVGInstagram, SVGLinkedn, SVGTwitter } from '../../assets/svg'

const Footer = () => {
    return (
        <MSContainer style={styles.container}>
            <MSContainer style={styles.linkBox}>
                <SVGInstagram />
                <MSText>Instagram</MSText>
            </MSContainer>
            <MSContainer style={styles.linkBox}>
                <SVGLinkedn />
                <MSText>Linkedn</MSText>
            </MSContainer>
            <MSContainer style={styles.linkBox}>
                <SVGTwitter />
                <MSText>Twitter</MSText>
            </MSContainer>
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
        gap: "15px",
        postition: "relative",
        bottom: 0,
    },
    linkBox: {
        display: "flex",
        justifyContent: "center",
        aligItems: "center",
        gap: "5px",
        color: MSColorPalette.secondary500,
        fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
        fontSize: MSFonts.MerriweatherRegular50.fontSize,
        fontWeight: MSFonts.MerriweatherRegular50.fontWeight,
        cursor: "pointer"
    }
}