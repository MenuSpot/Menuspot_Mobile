import React, { useState } from 'react'
import { MSContainer, MSImage, MSText } from '../../../components'
import { defaultDescription, employeeData } from './EmployeeData'
import { useSelector } from 'react-redux'
import { localize } from '../../../localization/localize'
import { SMALL_DEVICE_TRESHOLD } from '../../../constants/Dimension'
import { titleTeam, descriptionMobileText, descriptionText, imageMobileStyle, list, listItem, listItemMobile, listMobile, name, nameMobile, personalInfo, personalInfoCard, personalInfoCardMobile, personalInfoMobile, title, titleMobile, mobileComponentStyle, component, team, MediumComponentStyle, mediumComponentStyle, } from './AboutUsStyles'
import { responsiveStyleCreator } from '../../../utils/ResponsiveControl'

export const AboutUs = () => {
    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)
    //#region states
    const [employeeInfo, setEmployeeInfo] = useState('');
    const [hoverState, setHoverState] = useState(false);
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
        if (windowSize >= SMALL_DEVICE_TRESHOLD) {
            const interval = setInterval(() => {
                setHoverState(false);
            }, 2000);
            setTimingState(interval)
            setHoveredItem('');
            return () => clearInterval(interval);
        }
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
        < MSContainer style={responsiveStyleCreator(windowSize, component, mobileComponentStyle)} >
            {
                hoverState
                    ?
                    <MSContainer
                        key={employeeInfo.id}
                        style={responsiveStyleCreator(windowSize, personalInfo, personalInfoMobile)}
                        onMouseEnter={() => holdInfo()}
                        onMouseLeave={() => clearHold()}
                    >
                        <MSContainer style={responsiveStyleCreator(windowSize, personalInfoCard, personalInfoCardMobile)}>
                            <MSImage src={employeeInfo.image} alt={employeeInfo.name} />
                            <MSText style={responsiveStyleCreator(windowSize, title, titleMobile)}>{employeeInfo.title}</MSText>
                            <MSText style={responsiveStyleCreator(windowSize, name, nameMobile)}>{employeeInfo.name}</MSText>
                        </MSContainer>
                        <MSText style={responsiveStyleCreator(windowSize, descriptionText, descriptionMobileText)}>
                            {employeeInfo.description}
                        </MSText>
                    </MSContainer>
                    :
                    <MSText style={responsiveStyleCreator(windowSize, descriptionText, descriptionMobileText)}>
                        {defaultDescription.description}
                    </MSText>
            }
            <MSContainer style={team}>
                <MSText style={{ ...titleTeam, display: hoverState && responsiveStyleCreator(windowSize, "none", "block") }}>
                    {localize("TEAM")}
                </MSText>
                <MSContainer style={responsiveStyleCreator(windowSize, list, listMobile)}>
                    {
                        employeeData.map(item => (
                            <MSContainer
                                key={item.id}
                                style={{ opacity: hoveredItem === item.id ? 0.4 : 1, ...(responsiveStyleCreator(windowSize, listItem, listItemMobile)) }}
                                onMouseEnter={() => onHover(item)}
                                onMouseLeave={() => onLeave()}>
                                <MSImage
                                    src={item.image}
                                    alt={item.name}
                                    style={responsiveStyleCreator(windowSize, undefined, imageMobileStyle)} />
                                <MSText
                                    style={responsiveStyleCreator(windowSize, title, titleMobile)}>
                                    {item.title}
                                </MSText>
                                <MSText
                                    style={responsiveStyleCreator(windowSize, name, nameMobile)}>
                                    {item.name}
                                </MSText>
                            </MSContainer>
                        ))
                    }
                </MSContainer>
            </MSContainer>
        </ MSContainer>
    )
}