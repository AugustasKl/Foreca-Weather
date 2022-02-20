import { createSlice } from "@reduxjs/toolkit";

const initialLocationState={
    data:[]
}


const locationSlice=createSlice({
    name:"location",
    initialState:initialLocationState,
    reducers:{
        loadDataHandler(state, action){
            state.data.push({
                id:action.payload.id,
                name:action.payload.name,
                city:action.payload.city,
                country:action.payload.country
            })
        },
        replaceDataHandler(state, action){
            state.data=action.payload.data
        }
    }
})

export const locationActions=locationSlice.actions
export default locationSlice