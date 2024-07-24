import  { useState } from 'react'

const Count = () => { 
    const[count,setCount]=useState(0); 
     

    const handleTextChange=(e)=>{ 
        setCount(e.target.value.length);
    }
  return (
    <div> 
        <h2>{count>0?count:null}</h2>
        <textarea name="" id="txt" onChange={(e)=>{handleTextChange(e)}}></textarea> 
        {/* <button onClick={countLetter}>Count</button> */}
    </div>
  )
}

export default Count