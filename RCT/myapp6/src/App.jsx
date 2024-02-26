import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Counter=()=>{

  const [value,setValue]=useState(0)
  const [update,setUpdate]=useState(false)

  useEffect(()=>{
      console.log("use effect running..")


      return ()=>{
          console.log("CLEAN UP FUNCTION INVOKED")
      }

  },[update])

  // const getData=()=>{
  //   fetch(). ...  --> 10 secs

  // }
  // getData()

  return (
    <>
    <div style={{border:"1px solid black",margin:"5px"}}>
      <h4>COUNTER</h4>
    <p>{value}</p>
    <button onClick={()=>{setValue(value+1)}}>INC</button>
    <button onClick={()=>{setValue(value-1)}}>DEC</button><br/>
    <button onClick={()=>setUpdate(!update)}>UPDATE!</button>
    </div>
    </>
  )

}


function App() {
  const [counter, setCounter] = useState(false)


  const handleClick=()=>{
    setCounter(!counter)
  }

  // represent using ! symbol --> called (negate)

  return (
    <>
      {counter && <Counter/>}
      <button onClick={handleClick}>{counter?"HIDE COUNTER":"SHOW COUNTER"}</button>
    </>
  )
}

export default App


// LIFECYCLE OF COMPONENT

// --> BORN
// --> LIFESPAN 
// --> DIE

// --> MOUNT PHASE 
//     --WHEN THE COMPONENT IS ATTACTCHED TO THE UI.
// --> UPDATE PHASE
//     --WHEN THE COMPONENT GETS UPDATED.
// --> UNMOUNT PHASE
//     --WHEN THE COMPONENT IS REMOVED FROM THE UI.

// useEffect-->HOOK 

// useEffect( callBackfunc , [dependency array]) -->syntax
// --> THE FIRST ONE TO GET EXECUTED IS THE useEffect


// MOUNT PHASE:

// useEffect( () =>{} )
// // --> NO DEPENDENCY ARRAY
// // --> useEffect runs on mount phase and on every render.

// useEffect ( ()=>{} , [])

// --> EMPTY DEPENDENCY ARRAY
// --> useEffect runs on mount phase only and not on every render.
// -->USED FOR THE INITIAL RUN

// UPDATE PHASE:

// useEffect ( ()=>{}, [value])

// --> WE PASS A DEPENDENCY IN THE DEPENDENCY ARRAY.
// --> useEffect runs on mount phase and when the DEPENDENCY changes.

//UNMOUNT PHASE:

// useEffect( ()=>{


//   return cleanupFunction ()=>{

//   } ---> it runs on the unmount phase

// },[])

