import React from 'react'
import { Base64Image, MSContainer, MSText } from '..'
import { localize } from '../../localization/localize'

const MenuView2Card = ({ CardStyle, CardHeaderStyle, CardImage, cardPriceStyleView2, cardProductDescriptionView2, cardTextArea, item }) => {
    console.log(item)
    return (
        <MSContainer style={CardStyle}>
            <Base64Image style={CardImage} data={item.imageUrl} alt={item.name} />
            <MSContainer style={cardTextArea}>
                <MSText style={CardHeaderStyle}>{localize(item.name)}</MSText>
                <MSText style={cardProductDescriptionView2}>{localize(item.description)}</MSText>
                    <MSText style={cardPriceStyleView2}>{localize("$" + item.price)}</MSText>
            </MSContainer>
        </MSContainer>
    )
}

export default MenuView2Card