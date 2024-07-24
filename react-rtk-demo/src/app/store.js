import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreameSlice"
import userReducer from "../features/user/userSlice"
import { configureStore } from "@reduxjs/toolkit";
import {createLogger} from "redux-logger"; 
const logger=createLogger();

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        user:userReducer,
        iceCream:iceCreamReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});



export default store;






