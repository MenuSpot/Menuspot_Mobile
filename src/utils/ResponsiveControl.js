import { MEDIUM_DEVICE_TRESHOLD, SMALL_DEVICE_TRESHOLD } from "../constants/Dimension"

export const responsiveStyleCreator = (windowSize, largeDeviceStyle, mediumDeviceStyle, mobileDeviceStyle) => {
    if (windowSize > MEDIUM_DEVICE_TRESHOLD) {
        return largeDeviceStyle
    }
    else if (windowSize > SMALL_DEVICE_TRESHOLD) {
        return mediumDeviceStyle
    }
    else return mobileDeviceStyle
}