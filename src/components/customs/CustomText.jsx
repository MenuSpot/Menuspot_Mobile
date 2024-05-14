import React from 'react'

const CustomText = (props) => {
    const { style } = props
    return (
        <p  {...props} style={{ ...style }}>{props.children}</p>
    )
}

export default CustomText