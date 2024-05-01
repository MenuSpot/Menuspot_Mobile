import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Endpoints } from '../../../constants/Endpoints';
import { get } from '../../../services/BaseApiService';
import { MSContainer } from '../../../components';
import { MSColorPalette } from '../../../assets/ui';
import View1 from '../../../components/menuItems/View1';
import View2 from '../../../components/menuItems/View2';
import Toolbar from '../../../components/menuItems/Toolbar';
import { renderRectangleSkeleton, renderSkeletonCard } from '../../../utils/loadingRenderer';
import ToolbarSkeleton from '../../../components/loadingOverlay/ToolbarSkeleton';
import { useSelector } from 'react-redux';

export const Menu = () => {
    const { isMobileDevice: isMobile } = useSelector((state) => state.innerWidthSlice)
    const [isRow, setIsRow] = useState(true);
    const [data, setData] = useState([])
    const { id, name } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    const handleMenu = async () => {
        const response = await get(`${Endpoints.MENU_DATA}/${id}`)
        setData(response.data.categories)
        setIsLoading(false)
    }
    useEffect(() => {
        handleMenu()
    }, [])

    return (
        <MSContainer style={styles.componentStyle}>
            <MSContainer style={isRow ? styles.containerRow : styles.containerCol}>
                {
                    isLoading ? <ToolbarSkeleton isMobile={isMobile} /> :
                        <Toolbar isRow={isRow} setIsRow={setIsRow} name={name} isMobile={isMobile} />
                }
                {
                    isLoading && isRow ?
                        renderSkeletonCard(20, "menu")
                        :
                        isLoading && !isRow ?
                            renderRectangleSkeleton(20)
                            :
                            data.map(categories => (
                                isRow ? <View1 categories={categories} isMobile={isMobile} /> :
                                    <View2 categories={categories} />
                            ))
                }
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
    containerRow: {
        width: "900px",
        marginTop: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        gap: 24,
        flexWrap: "wrap",

    },
    containerCol: {
        width: "900px",
        marginTop: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
        flexWrap: "wrap",
    },
    cardsWrapper: {
    },
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
    }
    //#endregion
}