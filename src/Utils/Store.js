import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectsSlice"
import ButtonReducer from "./ButtonSlice"

const Store = configureStore({
    reducer:{
        projects: projectReducer,
        button: ButtonReducer,
    }
})

export default Store;