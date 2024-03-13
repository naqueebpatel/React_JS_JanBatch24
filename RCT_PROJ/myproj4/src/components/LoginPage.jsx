import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {


  const {isAuth,login,logout}=useContext(AuthContext);



  return (

    <div>
      <input type="text" placeholder='Enter your Email..'/>
      <input type="text" placeholder='Enter your Password..'/>
      <button onClick={login}>LOGIN</button>
      <button onClick={logout}>LOGOUT</button>
      <h3>{isAuth?"YOU ARE LOGGED IN":"PLEASE LOG IN"}</h3>
    </div>
  )
}

export default LoginPage