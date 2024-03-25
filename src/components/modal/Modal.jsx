import React from 'react'
import { SVGAvatar, SVGCloseModal } from '../../assets/svg'
import { MSColorPalette, MSFonts } from '../../assets/ui'
import { useDispatch, useSelector } from 'react-redux'
import { responsiveStyleCreator } from '../../utils/ResponsiveControl'
import { clearErrorMessage } from '../../store/slices/errorMessageSlice'

const Modal = () => {
    const { screenSize: windowSize } = useSelector((state) => state.innerWidthSlice)
    const { title, description, buttonText } = useSelector((state) => state.errorMessageSlice)
    const dispatch = useDispatch()

    return (
        <div style={responsiveStyleCreator(windowSize, largeStyles.modalOuterContainer, smallStyles.modalOuterContainer)}>
            <div style={responsiveStyleCreator(windowSize, largeStyles.modalInnerContainer, smallStyles.modalInnerContainer)}>
                <div>
                    <SVGAvatar />
                </div>
                <div style={responsiveStyleCreator(windowSize, largeStyles.modalContent, smallStyles.modalContent)}>
                    <div
                        style={responsiveStyleCreator(windowSize, largeStyles.closeIcon, smallStyles.closeIcon)}
                        onClick={() => dispatch(clearErrorMessage())}
                    >
                        <SVGCloseModal />
                    </div>
                    <div style={responsiveStyleCreator(windowSize, largeStyles.modalTexts, smallStyles.modalTexts)}>
                        <div
                            style={responsiveStyleCreator(windowSize, largeStyles.modalTitle, smallStyles.modalTitle)}>
                            {title}
                        </div>
                        <div
                            style={responsiveStyleCreator(windowSize, largeStyles.modalMessage, smallStyles.modalMessage)}>
                            {description}
                        </div>
                        <div style={responsiveStyleCreator(windowSize, largeStyles.modalButtons, smallStyles.modalButtons)}>
                            <button
                                style={responsiveStyleCreator(windowSize, largeStyles.modalDenyButton, smallStyles.modalDenyButton)}
                                onClick={() => dispatch(clearErrorMessage())}>
                                {buttonText}
                            </button>
                            <button
                                style={responsiveStyleCreator(windowSize, largeStyles.modalAcceptButton, smallStyles.modalAcceptButton)}
                                onClick={() => dispatch(clearErrorMessage())}>
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal

const largeStyles = {
    modalOuterContainer: {
        height: "100%",
        width: "100vw",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        zIndex: 9,
    },
    modalInnerContainer: {
        width: "708px",
        height: "404px",
        borderRadius: "24px",
        background: `radial-gradient(circle, ${MSColorPalette.primary500}, ${MSColorPalette.primary200}`,
        display: "flex",
        padding: "40px",
        boxShadow: " 1px 1px 9px -3px rgba(0,0,0,0.75)"
    },
    modalContent: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%"
    },
    closeIcon: {
        marginLeft: "auto",
        cursor: "pointer"
    },
    modalTexts: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    modalTitle: {
        fontFamily: MSFonts.MerriweatherBold100.fontFamily,
        fontSize: MSFonts.MerriweatherBold100.fontSize,
        fontWeight: MSFonts.MerriweatherBold100.fontWeight,
        color: MSColorPalette.white,
        marginRight: "110px"
    },
    modalMessage: {
        fontFamily: MSFonts.MerriweatherBold100.fontFamily,
        fontSize: MSFonts.MerriweatherBold100.fontSize,
        fontWeight: MSFonts.MerriweatherBold100.fontWeight,
        color: MSColorPalette.white,
    },
    modalButtons: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        width: "100%",
    },
    modalAcceptButton: {
        marginLeft: "80px",
        backgroundColor: MSColorPalette.primary500,
        width: "120px",
        padding: "10px 6.25px",
        borderRadius: "26px",
        borderColor: "transparent",
        cursor: "pointer",
        color: MSColorPalette.white,
        fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
        fontSize: MSFonts.MerriweatherRegular50.fontSize,
        fontWeight: MSFonts.MerriweatherRegular50.fontWeight,
    },
    modalDenyButton: {
        marginLeft: "80px",
        backgroundColor: MSColorPalette.primary200,
        width: "120px",
        padding: "10px 6.25px",
        borderRadius: "26px",
        borderColor: "transparent",
        cursor: "pointer",
        color: MSColorPalette.primary600,
        fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
        fontSize: MSFonts.MerriweatherRegular50.fontSize,
        fontWeight: MSFonts.MerriweatherRegular50.fontWeight
    }
}
const smallStyles = {
    modalOuterContainer: {
        height: "100vh",
        width: "100vw",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        zIndex: 9
    },
    modalInnerContainer: {
        width: "400px",
        height: "404px",
        borderRadius: "24px",
        background: `radial-gradient(circle, ${MSColorPalette.primary500}, ${MSColorPalette.primary200}`,
        display: "flex",
        padding: "10px",
        boxShadow: " 1px 1px 9px -3px rgba(0,0,0,0.75)"
    },
    modalContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        maxWidth: "200px"
    },
    closeIcon: {
        marginLeft: "auto",
        cursor: "pointer",
    },
    modalTexts: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100%",
        width: "100%"
    },
    modalTitle: {
        fontFamily: MSFonts.MerriweatherBold50.fontFamily,
        fontSize: MSFonts.MerriweatherBold50.fontSize,
        fontWeight: MSFonts.MerriweatherBold50.fontWeight,
        color: MSColorPalette.white,
        marginRight: "auto"
    },
    modalMessage: {
        fontFamily: MSFonts.MerriweatherBold50.fontFamily,
        fontSize: MSFonts.MerriweatherBold50.fontSize,
        fontWeight: MSFonts.MerriweatherBold50.fontWeight,
        color: MSColorPalette.white,
        paddingLeft: "10px"
    },
    modalButtons: {
        display: "flex",
        gap: "20px"
    },
    modalAcceptButton: {
        backgroundColor: MSColorPalette.primary500,
        width: "80px",
        padding: "10px",
        borderRadius: "26px",
        borderColor: "transparent",
        cursor: "pointer",
        color: MSColorPalette.white,
        fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
        fontSize: MSFonts.MerriweatherRegular50.fontSize,
        fontWeight: MSFonts.MerriweatherRegular50.fontWeight,
    },
    modalDenyButton: {
        backgroundColor: MSColorPalette.primary200,
        width: "80px",
        padding: "10px",
        borderRadius: "26px",
        borderColor: "transparent",
        cursor: "pointer",
        color: MSColorPalette.primary600,
        fontFamily: MSFonts.MerriweatherRegular50.fontFamily,
        fontSize: MSFonts.MerriweatherRegular50.fontSize,
        fontWeight: MSFonts.MerriweatherRegular50.fontWeight
    }
}