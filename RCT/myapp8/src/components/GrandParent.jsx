import React, { useCallback, useContext } from 'react'
import Parent from './Parent'
import { AuthContext } from '../context/AuthContext';


const GrandParent = () => {

// const value=useContext(AuthContext);
// const {isAuth,toggleAuth}=value

const {isAuth}=useContext(AuthContext);


  return (
    <>
    <h1>GrandParent</h1>
    <h4>{isAuth?"AUTHORIZED":"NOT AUTHORIZED"}</h4>
    <Parent/>
    </>
    
  )
}

export default GrandParent