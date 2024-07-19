const createSlice=require("@reduxjs/toolkit").createSlice;


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
            state.numsOfCakes+=action.payload
        }
    }
}); 

module.exports=cakeSlice.reducer;
module.exports.cakeAction=cakeSlice.actions;