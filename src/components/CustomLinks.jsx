import React from 'react'
import { Link } from 'react-router-dom'

const Links = (props) => {
    const { style, to, onClick } = props
    return (
        <Link to={to} style={style} onClick={onClick}> {props.children}</Link >
    )
}

export default Links