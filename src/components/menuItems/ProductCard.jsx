import { Base64Image, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import { ColorPalette } from "../../assets/ui/ColorPalette"
import { localize } from "../../localization/localize"
import "./MenuCard.css"


const ProductCard = ({ item }) => {

    return (

        <div className='container'>
            <div className='card'>
                <div className="front">
                    <MSText style={styles.cardHeaderStyleView1}>{localize(item.name)}</MSText>
                    <Base64Image style={styles.cardImageView1} data={item.imageUrl} alt={item.name} />
                    <MSText style={styles.cardFooterStyleView1}>{localize("$" + item.price)}</MSText>
                </div>
                <div className="back" style={styles.cardbackFace}>
                    <MSText style={styles.carHeaderBackFace}>{localize(item.name)}</MSText>
                    <MSText>{localize(item.description)}</MSText>
                </div>
            </div>
        </div>

    )
}
export default ProductCard

const styles = {
    cardHeaderStyleView1: {
        display: "flex",
        justifyContent: "center",
        alignIitems: "center",
        width: "100%",
        height: "40px",
        padding: "8px 12px",
        backgroundColor: MSColorPalette.secondary300,
        fontFamily: MSFonts.MerriweatherLight100.fontFamily,
        fontSize: MSFonts.MerriweatherLight100.fontSize,
        fontWeight: MSFonts.MerriweatherLight100.fontWeight,
    },
    cardImageView1: {
        width: "100%",
        height: "170px",

    },
    cardFooterStyleView1: {
        display: "flex",
        width: "100%",
        height: "30px",
        padding: "8px 12px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: MSColorPalette.secondary300
    },
    carHeaderBackFace: {
        display: "flex",
        justifyContent: "center",
        alignIitems: "center",
        padding: "8px 12px",
        backgroundColor: MSColorPalette.primary500,
        color: ColorPalette.secondary200,
        fontFamily: MSFonts.MerriweatherLight100.fontFamily,
        fontSize: MSFonts.MerriweatherLight100.fontSize,
        fontWeight: MSFonts.MerriweatherLight100.fontWeight,
        marginBottom: 10,
        borderRadius: 10
    },
    cardbackFace: {
        paddingTop: 10,
        padding: 20,
        backgroundColor: ColorPalette.secondary500,
    }
}