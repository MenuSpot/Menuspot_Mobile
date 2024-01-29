import React from 'react'

const CustomContainer = (props) => {
    const { style, onMouseEnter, onMouseLeave } = props
    return (
        <div style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{props.children}</div>
    )
}

export default CustomContainer