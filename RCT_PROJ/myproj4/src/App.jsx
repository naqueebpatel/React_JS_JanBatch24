import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './components/AllRoutes'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar/>
    <AllRoutes/>
    </>
  )
}

export default App
