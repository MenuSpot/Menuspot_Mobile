import React from 'react'
import { Link } from 'react-router-dom'

const Links = (props) => {
    const { style, to, onClick, onMouseEnter, onMouseLeave } = props
    return (
        <Link to={to} style={style} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> {props.children}</Link >
    )
}

export default Links