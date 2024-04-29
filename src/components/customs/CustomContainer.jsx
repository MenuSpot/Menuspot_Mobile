import React from 'react'

const CustomContainer = (props) => {
    const { style, onMouseEnter, onMouseLeave, onClick } = props
    return (
        <div style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{props.children}</div>
    )
}

export default CustomContainer