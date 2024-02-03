import React, { useEffect, useState } from 'react'
import { get } from '../../../services/BaseApiService'
import { CardRestaurant } from '../../../components/restaurantItems'
import { MSContainer } from '../../../components'
import { MSColorPalette } from '../../../assets/ui'
import { Endpoints } from '../../../constants/Endpoints'
import { Paths } from '../../../enums/Paths'

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
//#region Large device styles
const componentStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: MSColorPalette.restaurantBgColor
}
const containerStyle = {
    marginTop: "24px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "900px",
    gap: 10
}