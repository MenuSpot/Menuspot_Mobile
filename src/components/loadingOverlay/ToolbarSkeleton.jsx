import React from 'react'

const ToolbarSkeleton = () => {
    return (
        <div style={styles.toolbar} className='cardLoading'>
            <div style={styles.restaurantName} className='imageLoading'></div>
            <div style={styles.filter}>
                <div style={styles.chosenView}></div>
                <div style={styles.chosenView}></div>
            </div>
        </div >
    )
}

export default ToolbarSkeleton

const styles = {
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "62px",
        padding: "0 16px",
        borderRadius: "8px"
    },
    restaurantName: {
        width: "20%",
        height: "10px",
    },
    filter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer"
    },
    chosenView: {
        height: "30px",
        width: "40px",
        padding: "2px 10px",
        borderRadius: "8px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    }
}