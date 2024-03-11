import React, { useContext } from 'react'
import Children from './Children'
import { AuthContext } from '../main'

const Parent = () => {

const data=useContext(AuthContext)

  return (
    <>
    <h1>Parent</h1>
    <h6>{data.value ? "AUTHORIZED" :"NOT AUTHORIZED"}</h6>
    <Children />
    </>
  )
}

export default Parent