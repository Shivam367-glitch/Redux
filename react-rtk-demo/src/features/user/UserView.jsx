import  { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "./userSlice"
import "./user.css"
const UserView = () => { 
  const state = useSelector(state => state.user);
  const dispatch = useDispatch(); 


  const handleUser=()=>{
    dispatch(fetchUsers());
  }
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);


  return<>
  {state.loading&&<div>Loading....</div>}
  {!state.loading && state.error && <div>Error:{state.error}</div>}
  {!state.loading && state.users.length>0?(
    <ul>
      {
        state.users.map((user,ind)=>{
          return <li key={ind}>
            {user.name}</li>
        })
      }
    </ul>
  ):<button onClick={handleUser}>User</button>
  }
  </>

}

export default UserView
