import { createSlice } from "@reduxjs/toolkit";

const changeIconSlice = createSlice({
    name: "changeIcon",
    initialState: {
        ply: false
    },
    reducers: {
        changing_true: (state) => {
            state.ply = true;
        },
        changing_false: (state) => {
            state.ply = false;
        }
    },
});

export const {
    changing_false, changing_true
} = changeIconSlice.actions;
export default changeIconSlice.reducer;