import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectsSlice"

const Store = configureStore({
    reducer:{
        projects: projectReducer,
    }
})

export default Store;