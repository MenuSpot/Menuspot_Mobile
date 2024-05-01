import React, { useContext, useEffect, useState } from 'react'
import { Paths } from '../../../enums/Paths';
import { useDispatch, useSelector } from 'react-redux';
import { navbarRouteMapper } from '../utils';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export const Navbar = () => {
    const dispatch = useDispatch()
    const { onSignOut } = useContext(AuthContext)
    const { isMobileDevice: isMobile } = useSelector((state) => state.innerWidthSlice)
    const [pathname, setPathname] = useState("");

    const navigate = useNavigate()

    const handleLogOut = () => {
        onSignOut()
        navigate(Paths.DEFAULT)
    }

    const url = window.location.pathname
    useEffect(() => {
        setPathname(navbarRouteMapper(url))
    }, [url])

    return (
        <>
            {
                isMobile ?
                    <MobileNav dispatch={dispatch} handleLogOut={handleLogOut} />
                    :
                    <DesktopNav pathname={pathname} handleLogOut={handleLogOut} />
            }</>
    )
}
export default Navbar