import { useSelector } from "react-redux"
import "./Skeleton.css"

const CardSkeleton = ({ type }) => {
    const { isMobileDevice: isMobile } = useSelector((state) => state.innerWidthSlice)

    return (
        <div
            className="cardLoading"
            style={{
                ...(type === "restaurant" ? styles.resCard : styles.productCard), width: isMobile ? "160px" : "180px"
            }}
        >
            {type !== "restaurant" && <div className="titleLoading" style={styles.titleStyle}></div>}
            <div className="imageLoading" style={type === "restaurant" ? styles.resImage : styles.productImage}></div>
            <div className="titleLoading" style={styles.titleStyle}></div>
        </div >
    )
}

export default CardSkeleton

const styles = {
    resCard: {
        height: "240px",
        width: "180px",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        textDecoration: "none",
        borderRadius: "8px",
        overflow: "hidden",

    },
    resImage: {
        width: "180px",
        height: "200px",
    },
    productCard: {
        height: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        borderRadius: "8px",
        overflow: "hidden"
    },
    productImage: {
        width: "100%",
        height: "200px",
    },
    titleStyle: {
        width: "180px",
        height: "30px",
        padding: "8px 12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}