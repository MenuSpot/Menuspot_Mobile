import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isVisible: false,
    title: "",
    description: "",
    buttonText: ""
}
const errorMessageSlice = createSlice({
    name: "errorMessageSlice",
    initialState,
    reducers: {
        showErrorMessage: (state, action) => {
            state.isVisible = true;
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.buttonText = action.payload.buttonText;
        },
        clearErrorMessage: (state) => {
            state.isVisible = false
            state.title = ""
            state.description = ""
            state.buttonText = ""
        }
    }
})

export const { showErrorMessage, clearErrorMessage } = errorMessageSlice.actions;
export default errorMessageSlice.reducer;