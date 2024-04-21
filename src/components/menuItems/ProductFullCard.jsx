import React from 'react'
import { Base64Image, MSContainer, MSText } from '../..'
import { localize } from '../../../localization/localize'
import { MSColorPalette, MSFonts } from '../../../assets/ui'

const ProductFullCard = ({ item }) => {
    return (
        <MSContainer style={styles.cardStyleView2}>
            <Base64Image style={styles.cardImageView2} data={item.imageUrl} alt={item.name} />
            <MSContainer style={styles.cardTextArea}>
                <MSText style={styles.cardHeaderStyleView2}>{localize(item.name)}</MSText>
                <MSText style={styles.cardProductDescriptionView2}>{localize(item.description)}</MSText>
                <MSText style={styles.cardPriceStyleView2}>{localize("$" + item.price)}</MSText>
            </MSContainer>
        </MSContainer>
    )
}

export default ProductFullCard

const styles = {
    productCardView2: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "100%",
        flexWrap: "wrap",
    },
    cardStyleView2: {
        display: "flex",
        borderRadius: "8px",
        padding: "12px",
        backgroundColor: MSColorPalette.secondary500,
        gap: "24px",
        alignItems: "center",
        justifyContent: "center"
    },
    cardImageView2: {
        width: "180px",
        height: "170px",
        borderRadius: "8px"
    },
    cardHeaderStyleView2: {
        fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
        fontSize: MSFonts.MerriweatherRegular200.fontSize,
        fontWeight: MSFonts.MerriweatherRegular200.fontWeight
    },
    cardProductDescriptionView2: {
        color: MSColorPalette.text400,
        fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
        fontSize: MSFonts.MerriweatherRegular200.fontSize,
        fontWeight: MSFonts.MerriweatherRegular200.fontWeight
    },
    cardPriceStyleView2: {
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
    },
    cardTextArea: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%"
    },
}