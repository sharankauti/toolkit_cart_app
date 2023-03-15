import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState:{
        showNotistack :false
    },
    reducers:{
        showNotification(state,action){
           state.showNotistack = action.payload.showNotistack;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;