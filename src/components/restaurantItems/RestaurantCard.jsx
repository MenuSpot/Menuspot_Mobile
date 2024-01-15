import React from 'react'
import Base64Image from '../Base64Image'
import { MSLink, MSText } from '..';
import { MSColorPalette, MSFonts } from '../../assets/ui';

const RestaurantCard = (props) => {
    const { item } = props;

    return (
        <MSLink style={cardStyle}>
            <Base64Image style={imageStyle} data={item.imageUrl} />
            <MSText style={titleStyle}>{item.name}</MSText>
        </MSLink>
    )
}
export default RestaurantCard

//#region Large device styles
const cardStyle = {
    height: "240px",
    width: "180px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "24px",
    cursor: "pointer",
    textDecoration: "none",
    borderRadius: "8",
    overflow: "hidden"
}
const imageStyle = {
    width: "180px",
    height: "200px",
}
const titleStyle = {
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