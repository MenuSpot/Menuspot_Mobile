import React from 'react'

const Span = ({ children, style, ...props }) => {
    return (
        <div {...props} style={style}>{children}</div>
    )
}

export default Span