import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const HomePage = () => {

  const {token} =useContext(AuthContext);

  return (
    <div>

      <h4>TOKEN::{token?token:"PLEASE LOG IN!"}</h4>
    </div>
  )
}

export default HomePage