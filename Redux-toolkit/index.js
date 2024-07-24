const store=require("./app/store");
const {cakeAction}=require('./features/cake/cakeSlice');
const { iceCreamActions } = require("./features/iceCream/iceCreameSlice");
const { userActions } = require("./features/user/userSlice");



const unsubsribed=store.subscribe(()=>{
    // console.log(store.getState());
})   


// store.dispatch(cakeAction.ordered());
// store.dispatch(cakeAction.restored(5));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restored(5));
<<<<<<< HEAD
store.dispatch(userActions());
=======
store.dispatch(userActions.fetchUsers());
>>>>>>> a1880dd (integrated redux-toolkit in react js application)
unsubsribed();




