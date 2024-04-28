import React from 'react'

const CategoryNameSkeleton = () => {
    return (
        <div style={styles.container}>
            <div className='titleLoading' style={styles.categoryName}></div>
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
        overflow: "hidden"
    },
    categoryName: {
        width: "192px",
        height: "48px",
        borderRadius: "10px"
    }
}