import { SMALL_DEVICE_TRESHOLD } from "../../../constants/Dimension"
import { buttonMobileStyle, buttonStyle, disabledButtonMobileStyle, disabledButtonStyle } from "./signIn/SignInStyles"

export const buttonStyleCreator = (windowSize, isDisabled) => {
    if (windowSize >= SMALL_DEVICE_TRESHOLD && isDisabled === true)
        return disabledButtonStyle
    else if (windowSize >= SMALL_DEVICE_TRESHOLD && isDisabled === false)
        return buttonStyle
    else if (windowSize <= SMALL_DEVICE_TRESHOLD && isDisabled === true)
        return disabledButtonMobileStyle
    else return buttonMobileStyle
}
