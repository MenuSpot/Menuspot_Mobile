import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Endpoints } from '../../../constants/Endpoints';
import { get } from '../../../services/BaseApiService';
import { MSContainer, MSText } from '../../../components';
import { SVGFilterColumn, SVGFilterRow } from '../../../assets/svg';
import MenuCard from '../../../components/restaurantItems/MenuCard';
import MenuView2Card from '../../../components/restaurantItems/MenuView2Card';
import { cardFooterStyleView1, cardHeaderStyleView1, cardHeaderStyleView2, cardImageView1, cardImageView2, cardPriceStyleView2, cardProductDescriptionView2, cardStyleView1, cardStyleView2, cardTextArea, categoryName, chosenView, componentStyle, containerStyle, filter, productCardView1, productCardView2, productColumn, productRow, restaurantName, toolbar } from './MenuStyles';

export const Menu = () => {
    const [isRow, setIsRow] = useState(true);
    const [data, setData] = useState([])
    const { id, name } = useParams();

    const handleMenu = async () => {
        try {
            const response = await get(`${Endpoints.MENU_DATA}/${id}`)
            setData(response.data.categories)
        } catch {
            console.log("menü alınırken hata oluştu.")
        }
    }
    useEffect(() => {
        handleMenu()
    }, [])

    return (
        <MSContainer style={componentStyle}>
            <MSContainer style={containerStyle}>
                <MSContainer style={toolbar}>
                    <MSText style={restaurantName}>
                        {name}
                    </MSText>
                    <MSContainer style={filter}>
                        <MSContainer style={isRow ? chosenView : {}}>
                            <SVGFilterRow
                                isChosen={isRow}
                                onClick={() => setIsRow(true)} />
                        </MSContainer>
                        <MSContainer
                            style={isRow ? {} : chosenView}>
                            <SVGFilterColumn
                                isChosen={isRow}
                                onClick={() => setIsRow(false)} />
                        </MSContainer>
                    </MSContainer>
                </MSContainer >
                <MSContainer>
                    {
                        isRow ?
                            data.map(categories => (
                                <MSContainer key={categories.categoryId} style={productRow}>
                                    <MSText style={categoryName}>
                                        {categories.name}
                                    </MSText>
                                    <MSContainer style={productCardView1}>
                                        {
                                            (categories.products).map((item, index) => (
                                                <MenuCard
                                                    key={index}
                                                    item={item}
                                                    CardStyle={cardStyleView1}
                                                    CardHeaderStyle={cardHeaderStyleView1}
                                                    CardImage={cardImageView1}
                                                    CardFooterStyle={cardFooterStyleView1}
                                                />
                                            ))
                                        }
                                    </MSContainer>
                                </MSContainer>
                            )) :
                            data.map(categories => (
                                <MSContainer key={categories.categoryId} style={productColumn}>
                                    <MSText style={categoryName}>
                                        {categories.name}
                                    </MSText>
                                    <MSContainer style={productCardView2}>
                                        {
                                            (categories.products).map((item, index) => (
                                                <MenuView2Card
                                                    key={index}
                                                    item={item}
                                                    CardStyle={cardStyleView2}
                                                    CardImage={cardImageView2}
                                                    CardHeaderStyle={cardHeaderStyleView2}
                                                    cardProductDescriptionView2={cardProductDescriptionView2}
                                                    cardPriceStyleView2={cardPriceStyleView2}
                                                    cardTextArea={cardTextArea}
                                                />
                                            ))
                                        }
                                    </MSContainer>
                                </MSContainer>
                            ))
                    }
                </MSContainer>
            </MSContainer>
        </MSContainer >
    )
}