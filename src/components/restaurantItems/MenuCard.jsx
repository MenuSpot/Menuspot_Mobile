import React from 'react'
import { Base64Image, MSContainer, MSText } from '..'
import { MSColorPalette, MSFonts } from '../../assets/ui';
import { localize } from '../../localization/localize';

const MenuCard = ({ item, CardStyle, CardHeaderStyle, CardImage, CardFooterStyle }) => {
    return (
        <MSContainer style={CardStyle}>
            <MSText style={CardHeaderStyle}>{localize(item.name)}</MSText>
            <Base64Image style={CardImage} data={item.imageUrl} alt={item.name} />
            <MSText style={CardFooterStyle}>{localize("$" + item.price)}</MSText>
        </MSContainer>
    )
}

export default MenuCard