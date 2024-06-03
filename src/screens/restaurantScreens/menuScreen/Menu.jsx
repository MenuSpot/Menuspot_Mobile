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
import { responsiveStyleCreator } from '../../../utils/ResponsiveControl';

export const Menu = () => {
    const { isMobileDevice: isMobile, screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)
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
        <MSContainer style={styles.largeDevice.componentStyle}>
            <MSContainer
                style={isRow ? responsiveStyleCreator(windowSize, styles.largeDevice.containerRow, styles.smallDevice.containerRow)
                    :
                    responsiveStyleCreator(windowSize, styles.largeDevice.containerCol, styles.smallDevice.containerCol)}
            >
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
                                isRow ? <View1 categories={categories} isMobile={isMobile} key={categories.categoryId} /> :
                                    <View2 categories={categories} isMobile={isMobile} key={categories.categoryId} />
                            ))
                }
            </MSContainer>
        </MSContainer >
    )
}

const styles = {
    largeDevice: {
        componentStyle: {
            minHeight: "100%",
            width: "100%",
            height: "auto",
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: MSColorPalette.restaurantBgColor,
        },
        containerRow: {
            width: "900px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            flexWrap: "wrap",
        },
        containerCol: {
            width: "900px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 30,
            flexWrap: "wrap",
        },
    },
    smallDevice: {
        containerMobileStyle: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "24px"
        },
        containerRow: {
            width: "900px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
        },
        containerCol: {
            width: "900px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 24,
            flexWrap: "wrap",
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
    }
}