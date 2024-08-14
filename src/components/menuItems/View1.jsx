import { useSelector } from "react-redux"
import { MSContainer, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import { responsiveStyleCreator } from "../../utils/ResponsiveControl"
import ProductCard from "./ProductCard"



const View1 = ({ categories }) => {
    const { isMobileDevice: isMobile, screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)
    return (
        <MSContainer style={styles.largeDevice.productRow}>
            <MSContainer style={{ ...styles.largeDevice.categoryBox, borderRadius: isMobile ? "" : "8px" }}>
                <MSText style={styles.largeDevice.categoryName}>
                    {categories.name}
                </MSText>
            </MSContainer>
            <MSContainer style={{ ...styles.largeDevice.productCardView1 }}>
                <MSContainer style={responsiveStyleCreator(windowSize, styles.largeDevice.cardsContainer, styles.smallDevice.cardsContainer)}>
                    {
                        (categories.products).map((item) => (
                            <ProductCard
                                key={item.id}
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
    largeDevice: {
        categoryBox: {
            width: "100%",
            height: "48px",
            padding: "8px 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            marginBottom: 30,
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
            flexWrap: "wrap",
            width: "100%",
        },
        productCardView1: {
            display: "flex",
            flexWrap: "wrap",
        },
        cardsContainer: {
            display: "flex",
            gap: "60px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
        }
    },
    smallDevice: {
        cardsContainer: {
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            gap:24
        }
    },

}