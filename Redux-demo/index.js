//  import { connect } from 'react-redux'

const { createStore, combineReducers, applyMiddleware } = require("redux");
const {createLogger} =require("redux-logger");


const logger=createLogger();
const initialState={
    cake:10,
    iceCream:10
} 


const cakeState={
    cake:10
}


const iceState={
    iceCream:10
}

// Action Constant 
const CAKE_ORDERED="CAKE_ORDERED";
const CAKE_STORED="CAKE_STORED";


const ICE_ORDERED='ICE_ORDERED';
const ICE_STORED='ICE_STORED';

// Action Creator-->are function which return action


// Action creator to order cake
function orderCake(qty=1){

    return{
        type:CAKE_ORDERED,
        payload:qty
    }
}


// Action creator to restore the cake
function storeCake(qty=1){
    return {
        type:CAKE_STORED,
        payload:qty
    }
}


function orderIce(qty=1){
    // store.dispatch({type:'cake/CAKE_ORDERED',payload:1});
    return {
        type:ICE_ORDERED,
        payload:qty
    }
}


function storeIce(qty=1){
    return {

        type:ICE_STORED,
        payload:qty
    }
}

const cakeReducer=(state=cakeState,action)=>{
    switch (action.type) {
        case CAKE_ORDERED:
            return{
                ...state,cake:state.cake-action.payload
            }
        case CAKE_STORED:
            return{
                ...state,cake:state.cake+action.payload
            }
        default:
            return state;

    }
}



const iceCreamReducer=(state=iceState,action)=>{
    switch (action.type) {
        case ICE_ORDERED:
            
            return {
                ...state,iceCream:state.iceCream-action.payload
            }
        case ICE_STORED:
        return {
            ...state,iceCream:state.iceCream+action.payload
        }
        default:
            return state;

    }
}


const reducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
});


const store=createStore(reducer,applyMiddleware(logger));

const unsubcribed=store.subscribe(()=>{
    // console.log( store.getState());
});

store.dispatch(orderCake(5));
store.dispatch(storeCake(3));
store.dispatch(orderIce(5));
store.dispatch(storeIce(3));


unsubcribed();