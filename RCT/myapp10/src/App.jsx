import { useState } from 'react'
import './App.css'

function App() {
  var [count, setCount] = useState(0)

  const handleCount=()=>{
    count++
    console.log(count)
  }

  return (
    <>
        <button onClick={handleCount}>
          count is {count}
        </button>
        
    </>
  )
}

export default App


// Button---> VIEW
// handleCount---> CONTROLLER
// count--->MODEL

