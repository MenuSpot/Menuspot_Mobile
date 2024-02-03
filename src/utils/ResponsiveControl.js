import { SMALL_DEVICE_TRESHOLD } from "../constants/Dimension"

export const responsiveStyleCreator = (windowSize, largeDeviceStyle, mobileDeviceStyle) => {
    if (windowSize >= SMALL_DEVICE_TRESHOLD) {
        return largeDeviceStyle
    }
    else return mobileDeviceStyle
}