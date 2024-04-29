import { useSelector } from "react-redux"
import { MSContainer, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import ProductCard from "./ProductCard"
import { SMALL_DEVICE_TRESHOLD, } from "../../constants/Dimension"



const View1 = ({ categories }) => {

    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)

    return (
        <MSContainer key={categories.categoryId} style={styles.productRow}>
            <MSText style={{ marginLeft: windowSize <= SMALL_DEVICE_TRESHOLD ? "3%" : 0, ...styles.categoryName }}>
                {categories.name}
            </MSText>
            <MSContainer style={styles.productCardView1}>
                {
                    (categories.products).map((item, index) => (
                        <ProductCard
                            key={index}
                            item={item}
                        />
                    ))
                }
            </MSContainer>
        </MSContainer>
    )
}

export default View1

const styles = {
    categoryName: {
        width: "192px",
        height: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        color: MSColorPalette.white,
        backgroundColor: MSColorPalette.primary500,
        fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
        fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
        fontSize: MSFonts.MerriweatherRegular200.fontSize,
    },
    productRow: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        margin: "24px 0px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "left"
    },
    productCardView1: {
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        flexWrap: "wrap",
        padding: "10px"
    }
}