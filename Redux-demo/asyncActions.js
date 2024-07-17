const { createStore } = require("redux")

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


const store=createStore(reducer); 


const unsubcribed=store.subscribe(()=>{
    console.log(store.getState());
}); 


store.dispatch(fetchUser());
store.dispatch(fetchSuccess([9,8,7,6,5,4,3,2,1]));
store.dispatch(fetchError("Custom Error Errored!"));
unsubcribed(); 


