import React, { useCallback, useContext } from 'react'
import Parent from './Parent'
import { AuthContext } from '../main'

const GrandParent = () => {

const data=useContext(AuthContext);

  return (
    <>
    <h1>GrandParent</h1>
    <h6>{data.value ? "AUTHORIZED" :"NOT AUTHORIZED"}</h6>
    <h6>{data.text}</h6>
    <Parent/>
    </>
    
  )
}

export default GrandParent