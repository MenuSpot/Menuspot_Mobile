import React from 'react'

const CustomText = (props) => {
    const { font, style } = props
    return (
        <p {...props} style={{ ...style, ...font }}>{props.children}</p>
    )
}

export default CustomText