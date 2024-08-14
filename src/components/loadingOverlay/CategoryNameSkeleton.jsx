import React from 'react'
import { useSelector } from 'react-redux'

const CategoryNameSkeleton = () => {
    const { isMobileDevice: isMobile } = useSelector((state) => state.innerWidthSlice)

    return (
        <div style={styles.smallDevice.container}>
            <div className='titleLoading' style={{ ...styles.smallDevice.categoryName, borderRadius: isMobile ? "" : "10px" }}></div>
        </div >
    )
}

export default CategoryNameSkeleton

const styles = {
    largeDevice: {
        container: {
            display: "flex",
            overflow: "hidden",
        },
        categoryName: {
            width: "192px",
            height: "48px",
            borderRadius: "10px"
        }
    },
    smallDevice: {
        container: {
            width: "100%",
            display: "flex",
            overflow: "hidden",
        },
        categoryName: {
            width: "100%",
            height: "48px",
        }
    }


}