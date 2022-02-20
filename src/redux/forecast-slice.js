import { createSlice } from "@reduxjs/toolkit";
const initialForecastSlice={
    forecast:[],
}


const forecastSlice=createSlice({
    name:"forecast",
    initialState:initialForecastSlice,
    reducers:{
        loadForecastHandler(state, action){
            state.forecast.push({
                date:action.payload.date,
                maxTemp:action.payload.maxTemp,
                minTemp:action.payload.minTemp,
                id:action.payload.id
            })
        },
        replaceForecasthHandler(state,action){
            state.forecast=action.payload.forecast
        }
    }
})
export const forecastActions=forecastSlice.actions

export default forecastSlice