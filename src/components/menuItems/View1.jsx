import { MSContainer, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import ProductCard from "./ProductCard"



const View1 = ({ categories, isMobile }) => {

    return (
        <MSContainer key={categories.categoryId} style={styles.productRow}>
            <MSText style={{ ...styles.categoryName, borderRadius: isMobile ? "" : "8px" }}>
                {categories.name}
            </MSText>
            <MSContainer style={{ ...styles.productCardView1, margin: isMobile ? "5px" : 0 }}>
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
    categoryName: {
        width: "192px",
        height: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        width: "100%",
    },
    productCardView1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "auto",
    },
    cardsContainer: {
        display: "flex",
        gap: "25px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
}