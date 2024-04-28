import "./Skeleton.css"

const CardSkeleton = () => {
    return (
        <div className="cardLoading" style={styles.cardStyle}>
            <div className="titleLoading" style={styles.titleStyle}></div>
            <div className="imageLoading" style={styles.imageStyle}></div>
            <div className="titleLoading" style={styles.titleStyle}></div>
        </div>
    )
}

export default CardSkeleton

const styles = {
    cardStyle: {
        height: "240px",
        width: "180px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "24px",
        cursor: "pointer",
        textDecoration: "none",
        borderRadius: "8px",
        overflow: "hidden",
    },
    imageStyle: {
        width: "180px",
        height: "200px",
    },
    titleStyle: {
        width: "180px",
        height: "40px",
        padding: "8px 12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}