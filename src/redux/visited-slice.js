import { createSlice } from "@reduxjs/toolkit"

const visitedSlice=createSlice({
    name:'visitedSlice',
    initialState:{data:[]},
    reducers:{
        addDataToArray(state,action){
            const newItem = action.payload;
            const existingItem = state.data.find((item) => item.id === newItem.id);
            if (!existingItem) {
              state.data.push({
                id: newItem.id,
                city: newItem.city,
                country: newItem.country,
                region: newItem.region,
              });
            }
          },
          replaceData(state, action) {
            state.data = action.payload.data;
          },
        }
})

export const visitedActions=visitedSlice.actions

export default visitedSlice
