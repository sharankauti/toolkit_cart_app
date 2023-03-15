import {createSlice} from '@reduxjs/toolkit'


// const initialState = {
//     isLoggedIn : false 
// }

const authSlice = createSlice({
    name : 'Authoriazation',
    initialState : { isLoggedIn:false },
    reducers :{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }

}) 

export const authActions = authSlice.actions;

export default authSlice;