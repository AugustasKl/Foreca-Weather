import { createSlice } from "@reduxjs/toolkit";

const initialCurrentDataState={
    temperature:'',
    message:'',
    feelsLike:'',
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
        }

    }
})
export const currentDataSliceActions=currentDataSlice.actions
export default currentDataSlice