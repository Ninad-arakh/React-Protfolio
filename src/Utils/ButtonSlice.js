import { createSlice } from "@reduxjs/toolkit";

const ButtonSlice = createSlice({
    name: "button",
    initialState : "skills",
    reducers : {
        addToButton : (state, action) =>{
            return action.payload;
        },
    }
});

export const {addToButton} = ButtonSlice.actions;
export default ButtonSlice.reducer;