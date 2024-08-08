import React from 'react'
import { MSLink, MSText } from '..';
import { MSColorPalette, MSFonts } from '../../assets/ui';
import { responsiveStyleCreator } from '../../utils/ResponsiveControl';
import CustomImage from '../customs/CustomImage';
import { useSelector } from 'react-redux';


const RestaurantCard = (props) => {
    const { item, to } = props;
    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)

    return (
        <MSLink to={to} style={responsiveStyleCreator(windowSize, styles.largeDevice.cardStyle, styles.smallDevice.cardStyle)}>
            <CustomImage src={item.imageUrl}
                alt={item.name}
                style={responsiveStyleCreator(windowSize, styles.largeDevice.imageStyle, styles.smallDevice.imageStyle)} />
            <MSText
                style={responsiveStyleCreator(windowSize, styles.largeDevice.titleStyle, styles.smallDevice.titleStyle)}
            >
                {item.name}
            </MSText>
        </MSLink>
    )
}
export default RestaurantCard

const styles = {
    largeDevice: {
        cardStyle: {
            height: "240px",
            width: "180px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "24px",
            cursor: "pointer",
            textDecoration: "none",
            borderRadius: "8px",
            overflow: "hidden",
        },
        imageStyle: {
            width: "180px",
            height: "200px",
        },
        titleStyle: {
            width: "180px",
            height: "40px",
            padding: "8px 12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: MSColorPalette.secondary300,
            color: MSColorPalette.text500,
            fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
            fontSize: MSFonts.MerriweatherRegular100.fontSize,
            fontWeight: MSFonts.MerriweatherRegular100.fontWeight

        }
    },
    smallDevice: {
        cardStyle: {
            height: "240px",
            width: "160px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "24px",
            cursor: "pointer",
            textDecoration: "none",
            borderRadius: "8px",
            overflow: "hidden",
        },
        imageStyle: {
            width: "160px",
            height: "200px",
        },
        titleStyle: {
            height: "40px",
            padding: "8px 12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: MSColorPalette.secondary300,
            color: MSColorPalette.text500,
            fontFamily: MSFonts.MerriweatherRegular100.fontFamily,
            fontSize: MSFonts.MerriweatherRegular100.fontSize,
            fontWeight: MSFonts.MerriweatherRegular100.fontWeight
        }
    }
}