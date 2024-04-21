import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Endpoints } from '../../../constants/Endpoints';
import { get } from '../../../services/BaseApiService';
import { MSContainer, MSText } from '../../../components';
import { SVGFilterColumn, SVGFilterRow } from '../../../assets/svg';
import MenuCard from '../../../components/restaurantItems/menuItems/ProductCard';
import MenuView2Card from '../../../components/restaurantItems/menuItems/ProductFullCard';
import { MSColorPalette, MSFonts } from '../../../assets/ui';
import Toolbar from '../../../components/restaurantItems/menuItems/Toolbar';
import View1 from '../../../components/restaurantItems/menuItems/View1';
import View2 from '../../../components/restaurantItems/menuItems/View2';

export const Menu = () => {
    const [isRow, setIsRow] = useState(true);
    const [data, setData] = useState([])
    const { id, name } = useParams();

    const handleMenu = async () => {
        const response = await get(`${Endpoints.MENU_DATA}/${id}`)
        setData(response.data.categories)
    }

    useEffect(() => {
        handleMenu()
    }, [])

    return (
        <MSContainer style={styles.componentStyle}>
            <MSContainer style={styles.containerStyle}>
                <Toolbar isRow={isRow} setIsRow={setIsRow} name={name} />
                <MSContainer>
                    {
                        data.map(categories => (
                            isRow ?
                                <View1 categories={categories} />
                                :
                                <View2 categories={categories} />
                        ))}

                </MSContainer>
            </MSContainer>
        </MSContainer >
    )
}

const styles = {

    componentStyle: {
        minHeight: "100%",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "MSColorPalette.restaurantBgColor",
    },
    containerStyle: {
        width: "900px",
        marginTop: "24px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 24,
        flexWrap: "wrap"
    },




    //#endregion

    //#region small device styles
    containerMobileStyle: {
        width: "100%",
        marginTop: "24px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "24px"
    },
    toolbarMobile: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: MSColorPalette.secondary300,
        height: "62px",
        padding: "0 16px",
        borderRadius: "8px"
    },
    menuRowMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
    },
    menuColumnMobile: {

    }
}