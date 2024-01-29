import React, { useState } from 'react'
import { MSContainer, MSImage, MSText } from '../../../components'
import { defaultDescription, employeeData } from './EmployeeData'
import { MSColorPalette, MSFonts } from '../../../assets/ui'
import { ColorPalette } from '../../../assets/ui/ColorPalette'
import { Fonts } from '../../../assets/ui/Fonts'
import { useSelector } from 'react-redux'
import { isMobileDevice } from '../../../store/slices/innerWidthSlice'

export const AboutUs = () => {

    //#region states
    const [employeeInfo, setEmployeeInfo] = useState('');
    const [hoverState, setHoverState] = useState(false);
    const isMobile = useSelector(isMobileDevice);
    const [hoveredItem, setHoveredItem] = useState('');
    const [timingState, setTimingState] = useState();
    //#endregion

    //#region functions
    const onHover = (item) => {
        clearInterval(timingState);
        setHoverState(true);
        setEmployeeInfo(item);
        setHoveredItem(item.id);
    };
    const onLeave = () => {
        const interval = setInterval(() => {
            setHoverState(false);
        }, 2000);
        setTimingState(interval)
        setHoveredItem('');
        return () => clearInterval(interval);
    };
    const holdInfo = () => {
        setHoverState(true);
        clearInterval(timingState);
    };
    const clearHold = () => {
        setHoverState(false);
        setEmployeeInfo('');
    };
    //#endregion

    return (
        <MSContainer style={componentStyle}>
            <MSContainer style={isMobile ? containerMobile : containerStyle}>
                {
                    hoverState
                        ?
                        <MSContainer
                            key={employeeInfo.id}
                            style={isMobile ? personalInfoMobile : personalInfo}
                            onMouseEnter={() => holdInfo()}
                            onMouseLeave={() => clearHold()}>
                            <MSContainer
                                style={isMobile ? personalInfoCardMobile : personalInfoCard}>
                                <MSImage src={employeeInfo.image} alt={employeeInfo.name} />
                                <MSText>{employeeInfo.title}</MSText>
                                <MSText>{employeeInfo.name}</MSText>
                            </MSContainer>
                            <MSText style={isMobile ? descriptionMobileText : descriptionText}>{employeeInfo.description}</MSText>
                        </MSContainer>
                        :
                        <MSText style={isMobile ? descriptionMobileText : descriptionText}>{defaultDescription.description}</MSText>
                }
                <MSContainer style={isMobile ? teamMobile : team}>
                    <MSText style={{ ...teamTitle, display: hoverState && !isMobile ? "none" : "block" }}>TEAM</MSText>
                    <MSContainer style={isMobile ? listMobile : list}>
                        {
                            employeeData.map(item => (
                                <MSContainer
                                    key={item.id}
                                    style={{ opacity: hoveredItem === item.id ? 0.4 : 1, ...(isMobile ? listItemMobile : listItem) }}
                                    onMouseEnter={() => onHover(item)}
                                    onMouseLeave={() => onLeave()}>
                                    <MSImage src={item.image} alt={item.name} style={isMobile ? imageMobileStyle : undefined} />
                                    <MSText>{item.title}</MSText>
                                    <MSText>{item.name}</MSText>
                                </MSContainer>
                            ))
                        }
                    </MSContainer>
                </MSContainer>
            </MSContainer>
        </MSContainer >
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
    height: "90vh",
    padding: "40px 138px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
}
const descriptionText = {
    color: MSColorPalette.text500,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontWeigh: MSFonts.MerriweatherRegular200.fontWeight,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    lineHeight: "40px",
    width: "100%",
}
const team = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px"
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
    gap: "31px",
    flexWrap: "wrap"
}
const listItem = {
    width: "275px",
    gap: "23px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "center"
}
const personalInfo = {
    display: "flex",
    width: "1200px",
    height: "auto",
    gap: "30px",
}
const personalInfoCard = {
    gap: "23px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textAlign: "center",
    marginRight: "30px",
    width: "275px",
}
//#endregion
//#region Small device styles
const containerMobile = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px"
}
const personalInfoMobile = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    gap: "30px",
}
const personalInfoCardMobile = {
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textAlign: "center",
    width: "150px",
}
const descriptionMobileText = {
    color: MSColorPalette.text500,
    fontFamily: MSFonts.MerriweatherRegular200.fontFamily,
    fontWeigh: MSFonts.MerriweatherRegular200.fontWeight,
    fontSize: MSFonts.MerriweatherRegular200.fontSize,
    width: "auto",
    height: "auto"
}
const teamMobile = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    gap: "20px",
}
const listMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "31px",
    flexWrap: "wrap"
}
const listItemMobile = {
    width: "142px",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "10px",
}
const imageMobileStyle = {
    width: "130px"
}
//#endregion