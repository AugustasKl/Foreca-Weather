import { configureStore } from "@reduxjs/toolkit";
import currentDataSlice from "./currentData-slice";
import forecastSlice from "./forecast-slice";
import weatherSlice from "./weather-slice";

const store=configureStore({
    reducer:{
        weather:weatherSlice.reducer,
        currentData:currentDataSlice.reducer,
        forecast:forecastSlice.reducer
    }
})
export default store