import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//CREATE A CONTEXT

export const AuthContext=createContext();



//PROVIDE

const payload={
  value:true,
  text:"HI REACT"
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext.Provider value={payload}>
      <App />
  </AuthContext.Provider>
)
