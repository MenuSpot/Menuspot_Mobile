import React from 'react'

const CustomContainer = (props) => {
    const { style } = props
    return (
        <div style={style}>{props.children}</div>
    )
}

export default CustomContainer