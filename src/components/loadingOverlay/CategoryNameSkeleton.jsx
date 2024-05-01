import React from 'react'
import { useSelector } from 'react-redux'

const CategoryNameSkeleton = () => {
    const { isMobileDevice: isMobile } = useSelector((state) => state.innerWidthSlice)

    return (
        <div style={styles.container}>
            <div className='titleLoading' style={{ ...styles.categoryName, borderRadius: isMobile ? "" : "10px" }}></div>
        </div >
    )
}

export default CategoryNameSkeleton

const styles = {
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        overflow: "hidden",
    },
    categoryName: {
        width: "192px",
        height: "48px",
        borderRadius: "10px"
    }
}