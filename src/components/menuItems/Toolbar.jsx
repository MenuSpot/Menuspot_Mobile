import { MSContainer, MSText } from ".."
import { SVGFilterColumn, SVGFilterRow } from "../../assets/svg"
import { MSColorPalette, MSFonts } from "../../assets/ui"


const Toolbar = ({ isRow, setIsRow, name, isMobile }) => {
    return (
        <MSContainer style={{ ...styles.toolbar, borderRadius: isMobile ? "" : "8px", marginTop: !isMobile && "40px" }}>
            <MSText style={styles.restaurantName}>
                {name}
            </MSText>
            <MSContainer style={styles.filter}>
                <MSContainer style={isRow ? styles.chosenView : {}}>
                    <SVGFilterRow
                        isChosen={isRow}
                        onClick={() => setIsRow(true)} />
                </MSContainer>
                <MSContainer
                    style={isRow ? {} : styles.chosenView}>
                    <SVGFilterColumn
                        isChosen={isRow}
                        onClick={() => setIsRow(false)} />
                </MSContainer>
            </MSContainer>
        </MSContainer >
    )
}

export default Toolbar

const styles = {
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: MSColorPalette.secondary300,
        width: "100%",
        height: "62px",
        padding: "0 16px",
    },
    restaurantName: {
        color: MSColorPalette.text500,
        fontSize: MSFonts.MerriweatherBold50.fontSize,
        fontFamily: MSFonts.MerriweatherBold50.fontFamily,
        fontWeight: MSFonts.MerriweatherBold50.fontWeight,
    },
    filter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer"
    },
    chosenView: {
        display: "flex",
        padding: "2px 10px",
        alignItems: "flexStart",
        gap: "10px",
        borderRadius: "8px",
        backgroundColor: MSColorPalette.secondary500,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    },
}