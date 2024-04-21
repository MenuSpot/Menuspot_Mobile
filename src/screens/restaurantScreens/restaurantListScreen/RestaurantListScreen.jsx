import React, { useEffect, useState } from 'react'
import { get } from '../../../services/BaseApiService'
import { CardRestaurant } from '../../../components/restaurantItems'
import { MSContainer } from '../../../components'
import { Endpoints } from '../../../constants/Endpoints'
import { Paths } from '../../../enums/Paths'
import { MSColorPalette } from '../../../assets/ui'

export const RestaurantList = () => {
    const [restaurantData, setRestaurantData] = useState([])

    useEffect(() => {
        const handleRestaurants = async () => {
            const response = await get(Endpoints.RESTAURANT_DATA)
            setRestaurantData(response.data);
        }
        handleRestaurants()
    }, [])

    return (
        <MSContainer style={styles.component}>
            <MSContainer style={styles.container}>
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
        display: "flex",
        justifyContent: "center",
        backgroundColor: MSColorPalette.restaurantBgColor,
    },
    container: {
        marginTop: "24px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center ",
        width: "900px",
        gap: "25px",
        padding: "0 16px"
    }
}