import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./slices/musicSlice";


const store = configureStore({
    reducer:{
        Music:musicSlice
    }
})
export default store