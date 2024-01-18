import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    size: window.innerWidth
}

const innerWidthSlice = createSlice({
    name: "screenSize",
    initialState,
    reducers: {
        firstReducer: (state, action) => {
            state.size = action.payload;
        }
    }
})


export const size = (state) => state.innerWidthSlice.size
export const { firstReducer } = innerWidthSlice.actions;
export default innerWidthSlice.reducer;