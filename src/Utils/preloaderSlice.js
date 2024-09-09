import { createSlice } from "@reduxjs/toolkit";

const PreloaderSlice = createSlice({
    name: "preload",
    initialState: true,
    reducers: {
        changeState: (state, action) =>{
            return action.payload;
        }
    }
})

export const {changeState} = PreloaderSlice.actions;
export default PreloaderSlice.reducer;