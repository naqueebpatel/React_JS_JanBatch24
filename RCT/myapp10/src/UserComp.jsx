import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { AddUserAction } from './redux/Auth/actionType';

const UserComp = () => {

    const dispatch=useDispatch();

    const [user,setUser]=useState("");
  
    const handleSubmit=()=>{
      console.log(user)
      dispatch(AddUserAction(user))
    }


  return (
    <div style={{border:"1px solid black",margin:"20px"}}>
      <input type="text" name="username" placeholder='USERNAME...' value={user} onChange={(e)=>{setUser(e.target.value)}} />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default UserComp