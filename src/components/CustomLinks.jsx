import React from 'react'
import { Link } from 'react-router-dom'

const Links = (props) => {
    const { style, to } = props
    return (
        <Link to={to} style={style}> {props.children}</Link >
    )
}

export default Links