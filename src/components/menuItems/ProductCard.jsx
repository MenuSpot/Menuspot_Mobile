import React from 'react'
import { Base64Image, MSText } from '../..'
import { localize } from '../../../localization/localize';
import { MSColorPalette, MSFonts } from '../../../assets/ui';
import "./MenuCard.css"

const ProductCard = ({ item }) => {

    return (

        <div className='container'>
            <div className='card'>
                <div className="front">
                    <MSText style={styles.cardHeaderStyleView1}>{localize(item.name)}</MSText>
                    <Base64Image style={styles.cardImageView1} data={item.imageUrl} alt={item.name} />
                    <MSText style={styles.cardFooterStyleView1}>{localize("$" + item.price)}</MSText>
                </div>
                <div className="back">
                    <MSText style={styles.cardHeaderStyleView1}>{localize(item.name)}</MSText>
                    <MSText >{localize(item.description)}</MSText>
                </div>
            </div>
        </div>

    )
}
export default ProductCard

const styles = {
    cardHeaderStyleView1: {
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
    },
    cardImageView1: {
        width: "180px",
        height: "170px"
    },
    cardFooterStyleView1: {
        display: "flex",
        width: "180px",
        height: "30px",
        padding: "8px 12px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        backgroundColor: MSColorPalette.secondary300
    }
}