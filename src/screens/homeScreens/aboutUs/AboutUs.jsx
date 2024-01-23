import React, { useEffect, useState } from 'react'
import { MSContainer, MSImage, MSText } from '../../../components'
import { defaultDescription, employeeData } from './EmployeeData'
import { MSColorPalette, MSFonts } from '../../../assets/ui'
import { ColorPalette } from '../../../assets/ui/ColorPalette'
import { Fonts } from '../../../assets/ui/Fonts'




export const AboutUs = () => {
    const [description, setDescription] = useState(defaultDescription.description)
    const [hoverState, setHoverState] = useState(false)

    const onHover = () => {
        setHoverState(true)
        console.log(hoverState)
    }


    return (
        <MSContainer style={componentStyle}>
            <MSContainer style={containerStyle}>
                <MSText style={descriptionText}>{description}</MSText>
                <MSContainer style={team}>
                    <MSText style={teamTitle}>TEAM</MSText>
                    <MSContainer style={list}>
                        {
                            employeeData.map(item => (
                                <MSContainer key={item.id} style={listItem} onMouseEnter={onHover}>
                                    <MSImage src={item.image} alt={item.name} />
                                    <MSText>{item.title}</MSText>
                                    <MSText>{item.name}</MSText>
                                </MSContainer>
                            ))
                        }
                    </MSContainer>
                </MSContainer>
            </MSContainer>
        </MSContainer>
    )
}

//#region Large device styles
const componentStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
}
const containerStyle = {
    width: "100%",
    height: "100%",
    padding: "40px 138px",
    display: "flex",
    flexDirection: "column",
    gap: "100px"
}
const descriptionText = {
    color: MSColorPalette.text500,
    fontFamily: MSFonts.MerriweatherRegular300.fontFamily,
    fontWeigh: MSFonts.MerriweatherRegular300.fontWeight,
    fontSize: MSFonts.MerriweatherRegular300.fontSize,
}
const team = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
const teamTitle = {
    color: ColorPalette.primary700,
    fontFamily: Fonts.MerriweatherRegular300.fontFamily,
    fontWeight: Fonts.MerriweatherRegular300.fontWeight,
    fontSize: Fonts.MerriweatherRegular300.fontSize,
    textAlign: "center",
}
const list = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "31px"
}
const listItem = {
    width: "275px",
    gap: "23px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
}
//#endregion
//#region Small device styles
const componentMobileStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
}
const containerMobileStyle = {
    width: "100%",
    height: "100%",
    padding: "40px 138px",
    display: "flex",
    flexDirection: "column",
    gap: "100px"
}
const descriptionMobileText = {
    color: MSColorPalette.text500,
    fontFamily: MSFonts.MerriweatherRegular300.fontFamily,
    fontWeigh: MSFonts.MerriweatherRegular300.fontWeight,
    fontSize: MSFonts.MerriweatherRegular300.fontSize,
}
const teamMobile = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
const teamTitleMobile = {
    color: ColorPalette.primary700,
    fontFamily: Fonts.MerriweatherRegular300.fontFamily,
    fontWeight: Fonts.MerriweatherRegular300.fontWeight,
    fontSize: Fonts.MerriweatherRegular300.fontSize,
    textAlign: "center",
}
const listMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "31px"
}
const listItemMobile = {
    width: "275px",
    gap: "23px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
//#endregion