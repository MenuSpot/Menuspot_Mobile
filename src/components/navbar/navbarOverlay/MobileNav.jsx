import React from 'react'
import { MSContainer, MSLink, MSText } from '../..'
import { brandAreaMobile, logOutMobile, logoMobile, logoTextMobile, navItemsMobile, navbarMobile } from './NavbarStyles'
import { SVGHamburgerMenu, SVGLogOut, SVGMenuSpot } from '../../../assets/svg'
import { Paths } from '../../../enums/Paths'
import { openHamburgerMenu } from '../../../store/slices/innerWidthSlice'
import { localize } from '../../../localization/localize'

const MobileNav = ({ dispatch, handleLogOut }) => {
    return (
        < MSContainer style={navbarMobile} >
            <SVGHamburgerMenu onClick={() => dispatch(openHamburgerMenu())} />
            <MSLink to={Paths.DEFAULT} style={brandAreaMobile}>
                <SVGMenuSpot style={logoMobile} />
            </MSLink>
        </MSContainer >
    )
}

export default MobileNav