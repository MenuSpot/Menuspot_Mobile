import { configureStore } from "@reduxjs/toolkit";
import innerWidthSlice from "./slices/innerWidthSlice";
import errorMessageSlice from "./slices/errorMessageSlice";


const rootReducer = {
    innerWidthSlice: innerWidthSlice,
    errorMessageSlice: errorMessageSlice
}

const store = configureStore({
    reducer: rootReducer
})


export default store