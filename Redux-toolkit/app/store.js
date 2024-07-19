const cakeReducer=require("../features/cake/cakeSlice");
const iceCreamReducer=require("../features/iceCream/iceCreameSlice");
const configureStore=require("@reduxjs/toolkit").configureStore; 

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer
    }
});



module.exports=store;






