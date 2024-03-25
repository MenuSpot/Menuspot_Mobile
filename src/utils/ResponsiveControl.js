import { MEDIUM_DEVICE_TRESHOLD } from "../constants/Dimension"


export const responsiveStyleCreator = (windowSize, largeDeviceStyle, mobileDeviceStyle) => {
    if (windowSize > MEDIUM_DEVICE_TRESHOLD) {
        return largeDeviceStyle
    }
    else return mobileDeviceStyle
}