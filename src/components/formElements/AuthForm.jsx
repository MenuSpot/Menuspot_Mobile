import React from 'react'

const AuthForm = (props) => {
    const { style, handleSubmit } = props
    return (
        <form style={style} onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
        }}>
            {props.children}
        </form>
    )
}

export default AuthForm