import React, { useEffect, useState } from 'react'
import { get } from '../../../services/BaseApiService'
import { CardRestaurant } from '../../../components/restaurantItems'
import { MSContainer } from '../../../components'
import { Endpoints } from '../../../constants/Endpoints'
import { Paths } from '../../../enums/Paths'
import { componentStyle, containerStyleMobile } from './RestaurantListStyles'

export const RestaurantList = () => {
    const [restaurantData, setRestaurantData] = useState([])

    useEffect(() => {
        const handleRestaurants = async () => {
            const response = await get(Endpoints.RESTAURANT_DATA)
            setRestaurantData(response.data)
        }
        handleRestaurants()
    }, [])

    return (
        <MSContainer style={componentStyle}>
            <MSContainer style={containerStyleMobile}>
                {
                    restaurantData.map(item => (
                        <CardRestaurant to={`${Paths.MENU}/${item.id}/${item.name}`} item={item} key={item.id} />
                    ))
                }
            </MSContainer>
        </MSContainer>
    )
}