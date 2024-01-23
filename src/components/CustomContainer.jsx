import React from 'react'

const CustomContainer = (props) => {
    const { style, onMouseEnter } = props
    return (
        <div style={style} onMouseEnter={onMouseEnter}>{props.children}</div>
    )
}

export default CustomContainer