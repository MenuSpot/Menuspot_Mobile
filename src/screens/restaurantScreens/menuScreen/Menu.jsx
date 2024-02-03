import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Endpoints } from '../../../constants/Endpoints';
import { get } from '../../../services/BaseApiService';
import { MSContainer, MSText } from '../../../components';
import { MSColorPalette, MSFonts } from '../../../assets/ui';
import { SVGFilterColumn, SVGFilterRow } from '../../../assets/svg';
import MenuCard from '../../../components/restaurantItems/MenuCard';
import MenuView2Card from '../../../components/restaurantItems/MenuView2Card';

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

//#region region large device styles
const componentStyle = {
    height: "100%",
    width: "100%",
    backgroundColor: "MSColorPalette.restaurantBgColor",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const containerStyle = {
    width: "900px",
    marginTop: "24px",
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    gap: 24,
    flexWrap: "wrap"
}
const toolbar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: MSColorPalette.secondary300,
    width: "100%",
    height: "62px",
    padding: "0 16px",
    borderRadius: "8px"
}
const restaurantName = {
    color: MSColorPalette.text500,
    fontSize: MSFonts.MerriweatherBold50.fontSize,
    fontFamily: MSFonts.MerriweatherBold50.fontFamily,
    fontWeight: MSFonts.MerriweatherBold50.fontWeight,
}
const filter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer"
}
const chosenView = {
    display: "flex",
    padding: "2px 10px",
    alignItems: "flexStart",
    gap: "10px",
    borderRadius: "8px",
    backgroundColor: MSColorPalette.secondary500,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
}
const categoryName = {
    width: "192px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    color: MSColorPalette.white,
    backgroundColor: MSColorPalette.primary500,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
}
const productRow = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    margin: "24px 0px"
}
const productCardView1 = {
    display: "flex",
    gap: "51px",
    flexWrap: "wrap"
}
const cardStyleView1 = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    overflow: "hidden",
}
const cardHeaderStyleView1 = {
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
}
const cardImageView1 = {
    width: "180px",
    height: "170px"
}
const cardFooterStyleView1 = {
    display: "flex",
    width: "180px",
    height: "30px",
    padding: "8px 12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    backgroundColor: MSColorPalette.secondary300
}
const productColumn = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    marginTop: "20px"
}
const productCardView2 = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    width: "100%",
    flexWrap: "wrap",
}
const cardStyleView2 = {
    display: "flex",
    borderRadius: "8px",
    padding: "12px",
    backgroundColor: MSColorPalette.secondary500,
    gap: "24px"
}
const cardImageView2 = {
    width: "180px",
    height: "170px",
    borderRadius: "8px"
}
const cardHeaderStyleView2 = {
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight
}
const cardProductDescriptionView2 = {
    color: MSColorPalette.text400,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    fontWeight: MSFonts.MerriweatherRegular200.fontWeight
}
const cardPriceStyleView2 = {
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
}
const cardTextArea = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%"
}
//#endregion

//#region small device styles
const containerMobileStyle = {
    width: "100%",
    marginTop: "24px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 24
}
const toolbarMobile = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: MSColorPalette.secondary300,
    height: "62px",
    padding: "0 16px",
    borderRadius: "8px"
}
const menuRowMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
}
const menuColumnMobile = {

}

//#endregion