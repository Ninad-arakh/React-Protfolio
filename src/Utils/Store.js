import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectsSlice"
import ButtonReducer from "./ButtonSlice"
import PreloaderReducer from "./preloaderSlice"

const Store = configureStore({
    reducer:{
        projects: projectReducer,
        button: ButtonReducer,
        preload: PreloaderReducer,
    }
})

export default Store;