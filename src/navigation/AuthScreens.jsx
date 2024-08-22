import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import Authenticated from "./Authenticated"
import Unauthenticated from "./Unauthenticated"
import { Router } from "react-router-dom"

const AuthScreens = () => {
    const [isLoading, setIsLoading] = useState(true)
    const context = useContext(AuthContext)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, [1000])
    }, [])


    return (
        isLoading ?
            <></> :
            !!context.token ?
                    <Authenticated />
                :
                <Unauthenticated />
    )
}

export default AuthScreens 