import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from "axios";

const LoginPage = () => {


  const {isAuth,login,logout}=useContext(AuthContext);


  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const handleEmail=(event)=>{
    const {value}=event.target;
    setEmail(value)
  }

  const handlePassword=(event)=>{
    const {value}=event.target;
    setPassword(value)
  }

  const handleSubmit=()=>{
    const payload={
      email,
      password
    }
    console.log(payload)

   axios
      .post("https://reqres.in/api/login",payload)
      .then(res =>{
        login(res.data.token)
        console.log(res)
      })
      .catch(err => console.error(err));
  }


  return (

    <div>
      <input type="text" value={email} onChange={handleEmail} placeholder='Enter your Email..'/>
      <input type="text" value={password} onChange={handlePassword} placeholder='Enter your Password..'/><br/>
      <button onClick={handleSubmit}>SUBMIT</button>
      <button onClick={logout}>LOGOUT</button>
      <h3>{isAuth?"YOU ARE LOGGED IN":"PLEASE LOG IN"}</h3>
    </div>
  )
}

export default LoginPage