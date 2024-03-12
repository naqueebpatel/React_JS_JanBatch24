import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';


const Children = () => {


   //consume 
  // const data=useContext(AuthContext);

  const {isAuth,toggleAuth}=useContext(AuthContext);


  return (
    <>
    <h1>CHILDREN</h1>
    {/* <h6>{data.value ? "AUTHORIZED" :"NOT AUTHORIZED"}</h6> */}
    <h4>{isAuth?"AUTHORIZED":"NOT AUTHORIZED"}</h4>
    <button onClick={toggleAuth}>TOGGLE</button>
    </>
  )
}

export default Children