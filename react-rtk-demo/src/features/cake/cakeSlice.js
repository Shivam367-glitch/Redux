// const createSlice=require("@reduxjs/toolkit").createSlice; 


import {createSlice} from "@reduxjs/toolkit";


const initialState={
    numsOfCakes:10
}

const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numsOfCakes--;
        },
        restored:(state,action)=>{ 
           if(action.payload){

               state.numsOfCakes+=action.payload
           }else{
            state.numsOfCakes+=1;
           }
        }
    }
}); 

export default  cakeSlice.reducer;
export const {ordered,restored}=cakeSlice.actions;