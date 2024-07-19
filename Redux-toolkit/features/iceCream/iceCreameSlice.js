const createSlice=require("@reduxjs/toolkit").createSlice;

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
    }
});

module.exports=iceCreamSlice.reducer;
module.exports.iceCreamActions=iceCreamSlice.actions;
