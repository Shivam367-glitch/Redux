const cakeReducer=require("../features/cake/cakeSlice");
const iceCreamReducer=require("../features/iceCream/iceCreameSlice");
const userReducer=require("../features/user/userSlice");
const configureStore=require("@reduxjs/toolkit").configureStore; 
const logger=require("redux-logger").createLogger();
const store=configureStore({
    reducer:{
        cake:cakeReducer,
<<<<<<< HEAD
        iceCream:iceCreamReducer,
        user:userReducer
=======
        user:userReducer,
        iceCream:iceCreamReducer
>>>>>>> a1880dd (integrated redux-toolkit in react js application)
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});



module.exports=store;






