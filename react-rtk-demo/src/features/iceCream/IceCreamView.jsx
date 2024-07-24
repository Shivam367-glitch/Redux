import React from 'react'
import {useSelector,useDispatch}  from "react-redux"
import { ordered, restored } from './iceCreameSlice';
const IceCreamView = () => { 
    const state=useSelector(state=>state.iceCream); 
    const dispatch=useDispatch(); 
  return (
    <div>
        <h2>Number Of IceCream - {state.numsOfIceCream}</h2> 
        <button onClick={()=>{dispatch(ordered())}}>Order IceCream</button> 
        <button onClick={()=>{dispatch(restored(1))}}>Restore IceCream</button>
    </div>
  )
}

export default IceCreamView