import React from 'react'
import {useSelector,useDispatch}  from "react-redux"
import { ordered,restored } from './cakeSlice';
const CakeView = () => { 
    const state=useSelector(state=>state.cake);  
    const dispatch=useDispatch(); 


  return (
    <div>
        <h2>Number of Cake - {state.numsOfCakes}</h2> 
        <button onClick={()=>{dispatch(ordered())}}>Order Cake</button>
        <button onClick={()=>{dispatch(restored())}}>Restore Cake</button>
    </div>
  )
}

export default CakeView