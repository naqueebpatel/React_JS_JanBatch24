import React, { useContext } from 'react'
import { AuthContext } from '../main'

const Children = () => {


   //consume 
  const data=useContext(AuthContext);


  return (
    <>
    <h1>CHILDREN</h1>
    <h6>{data.value ? "AUTHORIZED" :"NOT AUTHORIZED"}</h6>
    </>
  )
}

export default Children