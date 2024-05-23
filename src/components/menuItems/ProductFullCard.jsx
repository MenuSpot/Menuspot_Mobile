import { useSelector } from "react-redux"
import { MSContainer, MSText } from ".."
import { MSColorPalette, MSFonts } from "../../assets/ui"
import { localize } from "../../localization/localize"
import { responsiveStyleCreator } from "../../utils/ResponsiveControl"


const ProductFullCard = ({ item }) => {
    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)
    return (
        <MSContainer
            style={responsiveStyleCreator(windowSize, styles.largeScreen.cardStyleView2, styles.smallScreen.cardStyleView2)}
        >
            <img
                src={item.imageUrl}
                style={responsiveStyleCreator(windowSize, styles.largeScreen.cardImageView2, styles.smallScreen.cardImageView2)}
                alt={item.name} />
            <MSContainer
                style={responsiveStyleCreator(windowSize, styles.largeScreen.cardTextArea, styles.smallScreen.cardTextArea)}

            >
                <MSText
                    style={responsiveStyleCreator(windowSize, styles.largeScreen.cardHeaderStyleView2, styles.smallScreen.cardHeaderStyleView2)}
                >
                    {localize(item.name)}
                </MSText>
                <MSText
                    style={responsiveStyleCreator(windowSize, styles.largeScreen.cardProductDescriptionView2, styles.smallScreen.cardProductDescriptionView2)}
                >
                    {localize(item.description)}
                </MSText>
                <MSText
                    style={responsiveStyleCreator(windowSize, styles.largeScreen.cardPriceStyleView2, styles.smallScreen.cardPriceStyleView2)}
                >
                    {localize("$" + item.price)}
                </MSText>
            </MSContainer>
        </MSContainer>
    )
}

export default ProductFullCard

const styles = {
    largeScreen: {
        cardStyleView2: {
            display: "flex",
            minHeight: "170px",
            borderRadius: "8px",
            padding: "12px",
            backgroundColor: MSColorPalette.secondary500,
            gap: "24px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",

        },
        cardImageView2: {
            maxWidth: "180px",
            maxHeight: "170px",
            borderRadius: "8px"
        },
        cardHeaderStyleView2: {
            fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
            fontSize: MSFonts.MerriweatherRegular200.fontSize,
            fontWeight: MSFonts.MerriweatherRegular200.fontWeight
        },
        cardProductDescriptionView2: {
            margin: "12px 0",
            color: MSColorPalette.text400,
            fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
            fontSize: MSFonts.MerriweatherRegular200.fontSize,
            fontWeight: MSFonts.MerriweatherRegular200.fontWeight
        },
        cardPriceStyleView2: {
            width: "103px",
            height: "32px",
            padding: "4px",
            borderRadius: "8px",
            color: MSColorPalette.white,
            backgroundColor: MSColorPalette.primary500,
            fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
            fontWeight: MSFonts.MerriweatherRegular200.fontWeight,
            fontSize: MSFonts.MerriweatherRegular200.fontSize,
            textAlign: "center",
            marginLeft: "auto"
        },
        cardTextArea: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%"
        },
    },
    smallScreen: {
        cardStyleView2: {
            minWidth: "350px",
            minHeight: "147px",
            display: "flex",
            borderRadius: "8px",
            padding: "12px",
            backgroundColor: MSColorPalette.secondary500,
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
        },
        cardImageView2: {
            width: "120px",
            height: "120px",
            borderRadius: "8px"
        },
        cardTextArea: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
            height: "100%"
        },
        cardHeaderStyleView2: {
            fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
            fontSize: MSFonts.MerriweatherRegular50.fontSize,
            fontWeight: MSFonts.MerriweatherRegular50.fontWeight
        },
        cardProductDescriptionView2: {
            color: MSColorPalette.text400,
            fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
            fontSize: MSFonts.MerriweatherRegular50.fontSize,
            fontWeight: MSFonts.MerriweatherRegular50.fontWeight
        },
        cardPriceStyleView2: {
            width: "71px",
            height: "22px",
            padding: "4px",
            borderRadius: "8px",
            color: MSColorPalette.white,
            backgroundColor: MSColorPalette.primary500,
            fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
            fontWeight: MSFonts.MerriweatherRegular50.fontWeight,
            fontSize: MSFonts.MerriweatherRegular50.fontSize,
            textAlign: "center",
            marginLeft: "auto"
        },
    }
}