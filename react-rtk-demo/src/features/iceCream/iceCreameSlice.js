// const { cakeAction } = require("../cake/cakeSlice"); 

import {ordered as cakeOrdered} from "../cake/cakeSlice";

// const createSlice=require("@reduxjs/toolkit").createSlice; 
import {createSlice} from "@reduxjs/toolkit";


const initialState={
    numsOfIceCream:10
}

const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numsOfIceCream--;
        },
        restored:(state,action)=>{
            state.numsOfIceCream+=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,state=>{
            state.numsOfIceCream--;
        })
    }
});

export default  iceCreamSlice.reducer;
export const {ordered,restored}=iceCreamSlice.actions;
