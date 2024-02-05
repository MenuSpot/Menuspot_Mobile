import { createSlice } from "@reduxjs/toolkit"
import { MEDIUM_DEVICE_TRESHOLD } from "../../constants/Dimension";

const initialState = {
    screenSize: window.innerWidth,
    isMobileDevice: (window.innerWidth <= MEDIUM_DEVICE_TRESHOLD),
    isHamburgerOpen: undefined
}
const innerWidthSlice = createSlice({
    name: "innerWidthSlice",
    initialState,
    reducers: {
        changeScreenSize: (state, action) => {
            state.screenSize = action.payload;
            state.isMobileDevice = state.screenSize >= MEDIUM_DEVICE_TRESHOLD ? false : true;
            if (state.isMobileDevice === false) state.isHamburgerOpen = false
        },
        openHamburgerMenu: (state) => {
            if (state.isHamburgerOpen === false) {
                state.isHamburgerOpen = true
                document.querySelector("body").style.overflow = "hidden"
            }
            else {
                state.isHamburgerOpen = false
                document.querySelector("body").style.overflow = ""
            }
        }
    }
})

export const screenSize = (state) => state.innerWidthSlice.screenSize
export const isMobileDevice = (state) => state.innerWidthSlice.isMobileDevice
export const isHamburgerOpen = (state) => state.innerWidthSlice.isHamburgerOpen
export const { changeScreenSize, changeNavbarSize, openHamburgerMenu } = innerWidthSlice.actions;
export default innerWidthSlice.reducer;