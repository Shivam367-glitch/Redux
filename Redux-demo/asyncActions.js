const { createStore, applyMiddleware } = require("redux") 
const logger=require("redux-logger").createLogger();
const thunkMiddleware = require('redux-thunk').thunk; 
const axios=require("axios");
const initialState={
    loading:false,
    users:[],
    error:''
} 

const FETCH_USER_REQUESTED='FETCH_USER_REQUESTED' 
const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS' 
const FETCH_USER_ERROR='FETCH_USER_ERROR' 

const fetchUser=()=>{
    return {
        type:FETCH_USER_REQUESTED
    }
}

const fetchError=(err)=>{
    return {
        type:FETCH_USER_ERROR,
        payload:err
    }
}

const fetchSuccess=(users)=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}


const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUESTED:
            return {
               ...state, loading:true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                users:action.payload
            }
        case FETCH_USER_ERROR:
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        default:
            return state
    }
} 

const fetchUsers = () => {
    return async function(dispatch) {
        dispatch(fetchUser());   
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users1111');
            const users = res.data.map(user => user.id);
            console.log(users);
            dispatch(fetchSuccess(users));
        } catch (err) {
            // console.log(err.message);
            dispatch(fetchError(err.message));
        }
    };
};

const store=createStore(reducer,applyMiddleware(thunkMiddleware,logger)); 


const unsubcribed=store.subscribe(()=>{
    // console.log(store.getState());
}); 


store.dispatch(fetchUsers());

unsubcribed(); 


