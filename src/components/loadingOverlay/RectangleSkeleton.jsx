import React from 'react'
import "./Skeleton.css"

const RectangleSkeleton = () => {
    return (
        <div style={styles.cardStyle}>
            <div className='imageLoading' style={styles.cardImage} />
            <div style={styles.cardTextArea}>
                <div className='titleLoading' style={styles.header}></div>
                <div className='titleLoading' style={styles.description}></div>
                <div className='titleLoading' style={styles.description}></div>
                <div className='titleLoading' style={styles.price}></div>
            </div>
        </div>
    )
}

export default RectangleSkeleton

const styles = {
    cardStyle: {
        display: "flex",
        borderRadius: "8px",
        padding: "12px",
        gap: "24px",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.1)"
    },
    cardImage: {
        width: "180px",
        height: "170px",
        borderRadius: "8px",
    },
    cardPriceStyle: {
        width: "103px",
        height: "32px",
        padding: "4px",
        borderRadius: "8px",
        textAlign: "center",
        marginLeft: "auto",
    },
    cardTextArea: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
    },
    header: {
        height: "10px",
        width: "20%",
        heigth: "180px",
        margin: 40
    },
    description: {
        height: "10px",
        width: "100%",
        marginBottom: 20
    },
    price: {
        width: "103px",
        height: "32px",
        borderRadius: "8px",
        margin: 10,
        marginLeft: "auto"
    }
}