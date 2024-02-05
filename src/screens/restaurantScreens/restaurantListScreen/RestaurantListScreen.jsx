import React, { useEffect, useState } from 'react'
import { get } from '../../../services/BaseApiService'
import { CardRestaurant } from '../../../components/restaurantItems'
import { MSContainer } from '../../../components'
import { Endpoints } from '../../../constants/Endpoints'
import { Paths } from '../../../enums/Paths'
import { componentStyle, containerStyle } from './RestaurantListStyles'

export const RestaurantList = () => {
    const [restaurantData, setRestaurantData] = useState([])

    const handleRestaurants = async () => {
        try {
            const response = await get(Endpoints.RESTAURANT_DATA)
            setRestaurantData(response.data)
        } catch {
            console.log("veri alınırken hata oluştu.")
        }
    }
    useEffect(() => {
        handleRestaurants()
    }, [])

    return (
        <MSContainer style={componentStyle}>
            <MSContainer style={containerStyle}>
                {
                    restaurantData.map(item => (
                        <CardRestaurant to={`${Paths.MENU}/${item.id}/${item.name}`} item={item} key={item.id} />
                    ))
                }
            </MSContainer>
        </MSContainer>
    )
}