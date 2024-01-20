import { createSlice } from "@reduxjs/toolkit"
import { SMALL_DEVICE_TRESHOLD } from "../../constants/Dimension";


const initialState = {
    screenSize: window.innerWidth,
    isHamburgerMenu: false
}

const innerWidthSlice = createSlice({
    name: "innerWidthSlice",
    initialState,
    reducers: {
        changeScreenSize: (state, action) => {
            state.screenSize = action.payload;
            state.isHamburgerMenu = state.screenSize >= SMALL_DEVICE_TRESHOLD ? false : true;
        },
    }
})


export const screenSize = (state) => state.innerWidthSlice.screenSize
export const isHamburgerMenu = (state) => state.innerWidthSlice.isHamburgerMenu
export const { changeScreenSize, changeNavbarSize } = innerWidthSlice.actions;
export default innerWidthSlice.reducer;