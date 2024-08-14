import React from 'react'
import { MSContainer, MSLink } from '../..'
import { brandAreaMobile, logoMobile, navbarMobile } from './NavbarStyles'
import { SVGHamburgerMenu, SVGMenuSpot } from '../../../assets/svg'
import { Paths } from '../../../enums/Paths'
import { openHamburgerMenu } from '../../../store/slices/innerWidthSlice'

const MobileNav = ({ dispatch }) => {
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