import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "games",
    initialState: {
        games: [],
        modal: false,
    }, 
    reducers: {
        
    }
})


export const {} = cartSlice.actions;

export default cartSlice.reducer;