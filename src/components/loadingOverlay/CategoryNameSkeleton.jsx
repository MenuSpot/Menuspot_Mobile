import React from 'react'
import {  SMALL_DEVICE_TRESHOLD } from '../../constants/Dimension'
import { useSelector } from 'react-redux'

const CategoryNameSkeleton = () => {
    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)

    return (
        <div style={styles.container}>
            <div className='titleLoading' style={{ marginLeft: windowSize <= SMALL_DEVICE_TRESHOLD ? "3%" : 0, ...styles.categoryName }}></div>
        </div>
    )
}

export default CategoryNameSkeleton

const styles = {
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        borderRadius: "10px",
        overflow: "hidden",
    },
    categoryName: {
        width: "192px",
        height: "48px",
        borderRadius: "10px"
    }
}