import { MSContainer, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import ProductCard from "./ProductCard"



const View1 = ({ categories, isMobile }) => {

    return (
        <MSContainer key={categories.categoryId} style={styles.productRow}>
            <MSContainer style={{ ...styles.categoryBox, borderRadius: isMobile ? "" : "8px" }}>
                <MSText style={styles.categoryName}>
                    {categories.name}
                </MSText>
            </MSContainer>
            <MSContainer style={{ ...styles.productCardView1 }}>
                <MSContainer style={styles.cardsContainer}>
                    {
                        (categories.products).map((item, index) => (
                            <ProductCard
                                key={index}
                                item={item}
                                isMobile={isMobile}
                            />
                        ))
                    }
                </MSContainer>
            </MSContainer>
        </MSContainer>
    )
}

export default View1

const styles = {
    categoryBox: {
        width: "100%",
        height: "48px",
        padding: "8px 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: MSColorPalette.primary500,
    }
    ,
    categoryName: {
        color: MSColorPalette.white,
        fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
        fontWeight: MSFonts.MerriweatherRegular100.fontWeight,
        fontSize: MSFonts.MerriweatherRegular200.fontSize,
    },
    productRow: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        margin: "24px 0px",
        flexWrap: "wrap",
    },
    productCardView1: {
        display: "flex",
        flexWrap: "wrap",
    },
    cardsContainer: {
        display: "flex",
        padding: "12px",
        gap: "52px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
}