import { MSContainer, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import ProductFullCard from "./ProductFullCard"

const View2 = ({ categories, isMobile }) => {
    return (
        <MSContainer key={categories.categoryId} style={styles.productColumn}>
            <MSContainer style={{ ...styles.categoryBox, borderRadius: isMobile ? "" : "8px" }}>
                <MSText style={styles.categoryName}>
                    {categories.name}
                </MSText>
            </MSContainer>
            <MSContainer style={styles.productColumn}>
                {
                    (categories.products).map((item, index) => (
                        <ProductFullCard
                            key={index}
                            item={item}
                        />
                    ))
                }
            </MSContainer>
        </MSContainer>
    )
}

export default View2

const styles = {
    productColumn: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        marginTop: "20px",
        marginBottom: "20px"
    },
    categoryBox: {
        width: "100%",
        height: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: MSColorPalette.primary500,
    },
    categoryName: {
        color: MSColorPalette.white,
        fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
        fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
        fontSize: MSFonts.MerriweatherRegular200.fontSize,
    },
}