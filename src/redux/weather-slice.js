import { createSlice } from "@reduxjs/toolkit";

const initialWeatherState={
    // locationId:'',
    // city:'',
    // country:'',
    data:[],
    resultId:''
}


const weatherSlice=createSlice({
    name:"weather",
    initialState:initialWeatherState,
    reducers:{
        // loacationIdHandler(state, action){
        //     state.locationId=action.payload.locationId
        //     state.city=action.payload.city
        //     state.country=action.payload.country
        // },

        loadDataHandler(state, action){
            state.data.push({
                id:action.payload.id,
                name:action.payload.name,
                city:action.payload.city,
                country:action.payload.country
            })
        },
        loadResultId(state, action){
            state.resultId=action.payload.resultId
        },
        replaceDataHandler(state, action){
            state.data=action.payload.data
        }
        // cityHandler(state,action){
        //     state.city=action.payload.city
        // },
        // countryHandler(state, action){
        //     state.country=action.payload.country
        // },

    }
})

export const weatherActions=weatherSlice.actions
export default weatherSlice