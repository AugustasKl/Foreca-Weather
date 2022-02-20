import { configureStore } from "@reduxjs/toolkit";
import currentDataSlice from "./currentData-slice";
import forecastSlice from "./forecast-slice";
import visitedSlice from "./visited-slice";
import locationSlice from "./location-slice";

const store=configureStore({
    reducer:{
        location:locationSlice.reducer,
        currentData:currentDataSlice.reducer,
        forecast:forecastSlice.reducer,
        visited:visitedSlice.reducer
    }
})
export default store