const {createStore} =require("redux"); 
const produce=require("immer").produce;

const initialState={
    name:"shivam",
    address:{
        street:"street",
        city:"city",
        state:"state"
    }
}





// Action Constant
const STREET_UPDATED='STREET_UPDATED';

// Action Creator
const updateStreet=(street)=>{ 

    return{
        type:STREET_UPDATED,
        payload:street
    }
} 

const reducer=(state=initialState,action)=>{


    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }

            // } 
           return produce(state,(draft)=>{
                draft.address.street=action.payload;
            });
        default:
            return state;
    }
}


const store=createStore(reducer);


const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(updateStreet("new street"));
store.dispatch(updateStreet("new street1"));

unsubscribe();

// immer is used to update nested state easily -as done in above example