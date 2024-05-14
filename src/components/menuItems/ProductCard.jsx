import { useState } from "react"
import { MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import { ColorPalette } from "../../assets/ui/ColorPalette"
import { localize } from "../../localization/localize"
import "./MenuCard.css"
import { useSelector } from "react-redux"
import { responsiveStyleCreator } from "../../utils/ResponsiveControl"
import { truncateText } from "../../utils/HandleTextLength"


const ProductCard = ({ item }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const { screenSize: windowSize, isHamburgerOpen } = useSelector((state) => state.innerWidthSlice)

    const handleToggle = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className='container'
            style={{
                zIndex: isHamburgerOpen && -1,
                ...responsiveStyleCreator(windowSize, styles.largeDevice.container, styles.smallDevice.container)
            }} >
            <div className={`card ${isFlipped ? "flipped" : ""}`} style={styles.card} onClick={handleToggle}>
                <div className="front">
                    <div style={responsiveStyleCreator(windowSize, styles.largeDevice.cardHeaderStyle, styles.smallDevice.cardHeaderStyle)}>
                        <MSText
                            style={responsiveStyleCreator(windowSize, styles.largeDevice.headerText, styles.smallDevice.headerText)}
                        >
                            {truncateText(item.name, 18)}
                        </MSText>
                    </div>
                    <img
                        src={item.imageUrl}
                        style={responsiveStyleCreator(windowSize, styles.largeDevice.cardImageView1, styles.smallDevice.cardImageView1)}
                        alt={item.name} />
                    <MSText
                        style={responsiveStyleCreator(windowSize, styles.largeDevice.cardFooterStyle, styles.smallDevice.cardFooterStyle)}
                    >
                        {localize("$" + item.price)}
                    </MSText>
                </div>
                <div className="back"
                    style={responsiveStyleCreator(windowSize, styles.largeDevice.cardbackFace, styles.smallDevice.cardbackFace)}
                >
                    <MSText
                        style={responsiveStyleCreator(windowSize, styles.largeDevice.cardHeaderStyle, styles.smallDevice.cardHeaderStyle)}
                    >
                        {localize(item.name)}
                    </MSText>
                    <MSText
                        style={responsiveStyleCreator(windowSize, styles.largeDevice.description, styles.smallDevice.description)}
                    >
                        {truncateText(item.description, 90)}
                    </MSText>
                </div>
            </div>
        </div >


    )
}
export default ProductCard



const styles = {
    largeDevice: {
        container: {
            width: "180px",
            height: "240px",
        },
        card: {
            borderRadius: "8px",
        },
        cardHeaderStyle: {
            backgroundColor: MSColorPalette.secondary300,
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignIitems: "center",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            width: "100%",
            padding: "12px",
        },
        headerText: {
            fontFamily: MSFonts.MerriweatherLight100.fontFamily,
            fontSize: MSFonts.MerriweatherLight100.fontSize,
            fontWeight: MSFonts.MerriweatherLight100.fontWeight,
        },
        cardImageView1: {
            width: "100%",
            height: "170px",
        },
        cardFooterStyle: {
            display: "flex",
            width: "100%",
            height: "40px",
            borderRadius: "0 0 8px 8px",
            padding: "8px 12px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: MSColorPalette.secondary300,
        },
        carHeaderBackFace: {
            display: "flex",
            justifyContent: "center",
            alignIitems: "center",
            backgroundColor: MSColorPalette.primary500,
            color: ColorPalette.secondary200,
            fontFamily: MSFonts.MerriweatherLight100.fontFamily,
            fontSize: MSFonts.MerriweatherLight100.fontSize,
            fontWeight: MSFonts.MerriweatherLight100.fontWeight,
        },
        cardbackFace: {
            backgroundColor: ColorPalette.primary400,
            borderRadius: "8px"
        },
        description: {
            padding: 15,
            maxWidth: " 100%",
            overflow: "hidden",
            whiteSpace: "wrap",
            textOverflow: "ellipsis"
        }
    },
    smallDevice: {
        container: {
            width: "160px",
            height: "240px",
        },
        card: {
            borderRadius: "8px",
        },
        cardHeaderStyle: {
            backgroundColor: MSColorPalette.secondary300,
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignIitems: "center",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            width: "100%",
            padding: "12px",
        },
        headerText: {
            fontFamily: MSFonts.MerriweatherLight100.fontFamily,
            fontSize: MSFonts.MerriweatherLight100.fontSize,
            fontWeight: MSFonts.MerriweatherLight100.fontWeight,
        },
        cardImageView1: {
            width: "100%",
            height: "170px",
        },
        cardFooterStyle: {
            display: "flex",
            width: "100%",
            height: "30px",
            borderRadius: "0 0 8px 8px",
            padding: "8px 12px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: MSColorPalette.secondary300,
        },
        carHeaderBackFace: {
            display: "flex",
            justifyContent: "center",
            alignIitems: "center",
            backgroundColor: MSColorPalette.primary500,
            color: ColorPalette.secondary200,
            fontFamily: MSFonts.MerriweatherLight100.fontFamily,
            fontSize: MSFonts.MerriweatherLight100.fontSize,
            fontWeight: MSFonts.MerriweatherLight100.fontWeight,
        },
        cardbackFace: {
            backgroundColor: ColorPalette.primary400,
            borderRadius: "8px"
        },
        description: {
            padding: 15
        }
    }




























    // card: {
    //     borderRadius: "8px",
    // },
    // cardHeaderStyleView1: {
    //     display: "flex",
    //     justifyContent: "center",
    //     alignIitems: "center",
    //     width: "100%",
    //     height: "40px",
    //     padding: "8px 12px",
    //     backgroundColor: MSColorPalette.secondary300,
    //     fontFamily: MSFonts.MerriweatherLight100.fontFamily,
    //     fontSize: MSFonts.MerriweatherLight100.fontSize,
    //     fontWeight: MSFonts.MerriweatherLight100.fontWeight,
    // },
    // cardImageView1: {
    //     width: "100%",
    //     height: "170px",
    // },
    // cardFooterStyleView1: {
    //     display: "flex",
    //     width: "100%",
    //     height: "30px",
    //     padding: "8px 12px",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: MSColorPalette.secondary300,
    // },
    // carHeaderBackFace: {
    //     display: "flex",
    //     justifyContent: "center",
    //     alignIitems: "center",
    //     padding: "8px 12px",
    //     backgroundColor: MSColorPalette.primary500,
    //     color: ColorPalette.secondary200,
    //     fontFamily: MSFonts.MerriweatherLight100.fontFamily,
    //     fontSize: MSFonts.MerriweatherLight100.fontSize,
    //     fontWeight: MSFonts.MerriweatherLight100.fontWeight,
    //     marginBottom: 10,
    // },
    // cardbackFace: {
    //     paddingTop: 10,
    //     padding: 20,
    //     backgroundColor: ColorPalette.secondary500,
    // }
}