import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// const reducer=(state,{type,payload})=>{
//    if(type=='INC_COUNT'){
//         return state+1;
//    }else if(type=='DEC_COUNT'){
//         return state-1;
//    }else if(type=='RESET'){
//       return 0;
//    }else{
//       return state;
//    }
// }

const reducer=(state,{type,payload})=>{
  switch(type){
    case "INC_COUNT":{
      return state+payload;
    }
    case "DEC_COUNT":{
      return state-payload;
    }
    case "RESET":{
      return 0;
    }
    default:{
      throw new Error("INVALID DISPATCH")
    }
  }
}

function App() {

  const initialState=10
  const [state,dispatch]=useReducer(reducer,initialState);

  const handleInc=()=>{
    dispatch({type:"INC_COUNT",payload:10})
  }

  const handleDec=()=>{
    dispatch({type:"DEC_COUNT",payload:5})
  }

  const handleReset=()=>{
    dispatch({type:"RESET"})
  }

  const handleInvalid=()=>{
    dispatch({type:"MULTIPLY"})
  }

  return (
    <>
    <p>COUNT:::{state}</p>
     <button onClick={handleInc}>INCREMENT</button>
     <button onClick={handleDec}>DECREMENT</button>
     <button onClick={handleReset}>RESET</button> 
     <button onClick={handleInvalid}>INVALID</button>
    </>
  )
}

export default App


// const [count,setCount]=useState(0);

// const handleInc=()=>{
//   setCount(count+1)
// }

// const handleDec=()=>{
//   setCount(count-1)
// }

// const handleReset=()=>{
//   setCount(0)
// }

// return (
//   <>
//   <p>COUNT:::{count}</p>
//    <button onClick={handleInc}>INCREMENT</button>
//    <button onClick={handleDec}>DECREMENT</button>
//    <button onClick={handleReset}>RESET</button> 
//   </>