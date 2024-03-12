import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import {ThemeContextProvider} from "./context/ThemeContext.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  </ThemeContextProvider>
)
