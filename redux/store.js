import { configureStore } from "@reduxjs/toolkit"; 

import gameSlice from "./Slice";

const store = configureStore({
    reducer: {
        stateName: gameSlice
    }
})

export default store;