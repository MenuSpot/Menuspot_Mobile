import React, { useEffect, useState } from 'react'
import { get } from '../../../services/BaseApiService'
import { CardRestaurant } from '../../../components/restaurantItems'
import { MSContainer } from '../../../components'
import { Endpoints } from '../../../constants/Endpoints'
import { Paths } from '../../../enums/Paths'
import { MSColorPalette } from '../../../assets/ui'
import { renderSkeletonCard } from '../../../utils/loadingRenderer'
import { useSelector } from 'react-redux'

export const RestaurantList = () => {
    const { isMobileDevice: isMobile } = useSelector((state) => state.innerWidthSlice)
    const [restaurantData, setRestaurantData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleRestaurants = async () => {
            const response = await get(Endpoints.RESTAURANT_DATA)
            setRestaurantData(response.data);
            setIsLoading(false)
        }
        handleRestaurants()
    }, [])

    if (isLoading) return (
        <MSContainer style={{ ...styles.container, justifyContent: isMobile ? "center" : "space-between", gap: isMobile ? "24px" : "0", padding: !isMobile && "0 310px" }}>
            {renderSkeletonCard(20, "restaurant")}
        </MSContainer>
    )


    return (
        <MSContainer style={{ ...styles.component, padding: !isMobile && "0 310px" }}>
            <MSContainer style={{ ...styles.container, justifyContent: isMobile ? "center" : "space-between", gap: isMobile ? "24px" : "0" }}>
                {
                    restaurantData.map(item => (
                        <CardRestaurant to={`${Paths.MENU}/${item.id}/${item.name}`} item={item} key={item.id} />
                    ))
                }
            </MSContainer>
        </MSContainer>
    )
}

const styles = {
    component: {
        minHeight: "100%",
        height: "auto",
        backgroundColor: MSColorPalette.restaurantBgColor,
    },
    container: {
        width: "100%",
        marginTop: "24px",
        display: "flex",
        flexWrap: "wrap",
    }
}