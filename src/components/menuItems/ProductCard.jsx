import { useState } from "react"
import { Base64Image, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import { ColorPalette } from "../../assets/ui/ColorPalette"
import { localize } from "../../localization/localize"
import "./MenuCard.css"
import { useSelector } from "react-redux"


const ProductCard = ({ item, isMobile }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const isHamburgerOpen = useSelector((state) => state.innerWidthSlice.isHamburgerOpen)

    const handleToggle = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className='container'
            style={{
                ...styles.container, width: isMobile ? "160px" : "180px",
                height: isMobile ? "215px" : "240px",
                zIndex: isHamburgerOpen ? -1 : "auto"
            }} >
            <div className={`card ${isFlipped ? "flipped" : ""}`} style={styles.card} onClick={handleToggle}>
                <div className="front">
                    <MSText style={styles.cardHeaderStyle}>{localize(item.name)}</MSText>
                    <Base64Image style={styles.cardImageView1} data={item.imageUrl} alt={item.name} />
                    <MSText style={styles.cardFooterStyle}>{localize("$" + item.price)}</MSText>
                </div>
                <div className="back" style={styles.cardbackFace}>
                    <MSText style={styles.cardHeaderStyle}>{localize(item.name)}</MSText>
                    <MSText style={styles.description}>{localize(item.description)}</MSText>
                </div>
            </div>
        </div >


    )
}
export default ProductCard



const styles = {
    container: {
        width: "180px",
        height: "240px",
    },
    card: {
        borderRadius: "8px",
    },
    cardHeaderStyle: {
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignIitems: "center",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        width: "100%",
        padding: "12px",
        backgroundColor: MSColorPalette.secondary300,
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
        padding: 15
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