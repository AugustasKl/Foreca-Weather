import { createSlice } from "@reduxjs/toolkit";
const initialForecastSlice={
    forecast:[],
    // date:'',
    // maxTemp:'',
    // minTemp:'',
    // id:'',
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
        // dateHandler(state, action){
        //     state.date=action.payload.date
        // },
        // maxTempHandler(state,action){
        //     state.maxTemp=action.payload.maxTemp
        // },
        // minTempHandler(state, action){
        //     state.minTemp=action.payload.minTemp
        // },
        // idHandler(state, action){
        //     state.id=action.payload.id
        // }
    }
})
export const forecastActions=forecastSlice.actions

export default forecastSlice