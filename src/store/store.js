import { configureStore } from "@reduxjs/toolkit";
import innerWidthSlice from "./slices/innerWidthSlice";


const rootReducer = {
    innerWidthSlice: innerWidthSlice
}

const store = configureStore({
    reducer: rootReducer
})


export default store