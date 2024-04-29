import React from 'react'
import Base64Image from '../customs/Base64Image'
import { MSLink, MSText } from '..';
import { MSColorPalette, MSFonts } from '../../assets/ui';

const RestaurantCard = (props) => {
    const { item, to } = props;

    return (
        <MSLink to={to} style={styles.cardStyle}>
            <Base64Image style={styles.imageStyle} data={item.imageUrl} />
            <MSText style={styles.titleStyle}>{item.name}</MSText>
        </MSLink>
    )
}
export default RestaurantCard

const styles = {
    cardStyle: {
        height: "240px",
        width: "180px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "24px",
        cursor: "pointer",
        textDecoration: "none",
        borderRadius: "8px",
        overflow: "hidden",
    },
    imageStyle: {
        width: "180px",
        height: "200px",
    },
    titleStyle: {
        width: "180px",
        height: "40px",
        padding: "8px 12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: MSColorPalette.secondary300,
        color: MSColorPalette.text500,
        fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
        fontSize: MSFonts.MerriweatherRegular100.fontSize,
        fontWeight: MSFonts.MerriweatherRegular100.fontWeight
    }
}