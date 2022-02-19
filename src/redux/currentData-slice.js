import { createSlice } from "@reduxjs/toolkit";

const initialCurrentDataState={
    temperature:'',
    message:'',
    feelsLike:'',
    city:'',
    country:'',
    region:''
}

const currentDataSlice=createSlice({
    name:"currentData",
    initialState:initialCurrentDataState,
    reducers:{
        temperatureHandler(state, action){
            state.temperature=action.payload.temperature
        },
        messageHandler(state, action){
            state.message=action.payload.message
        },
        feelsLikeHandler(state, action){
            state.feelsLike=action.payload.feelsLike
        },
        cityHandler(state, action){
            state.city=action.payload.city
        },
        countryHandler(state,action){
            state.country=action.payload.country
        },
        regionHandler(state,action){
            state.region=action.payload.region
        }

    }
})
export const currentDataSliceActions=currentDataSlice.actions
export default currentDataSlice