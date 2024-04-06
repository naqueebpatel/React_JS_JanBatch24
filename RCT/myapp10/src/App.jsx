import { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import './App.css'
import { DecAction, IncAction } from './redux/Counter/actionType';
import UserComp from './UserComp';

function App() {

  const count=useSelector((store)=>store.CounterReducer.count);
  const user=useSelector((store)=>store.AuthReducer.username)
  const dispatch=useDispatch()
  
  const handleInc=()=>{
    //  dispatch({type:"INC"})
    dispatch(IncAction())
  }

  const handleDec=()=>{
    dispatch(DecAction())
  }

  return (
    <>
    <h1>USER ::: {user}</h1>
    <div style={{border:"1px solid black"}}>
       <button onClick={handleInc}>INCREMENT</button>
       <h3>COUNT:::{count}</h3>
       <button onClick={handleDec}>DECREMENT</button>    
    </div>
    <UserComp/>
        
    </>
  )
}

export default App


// Button---> VIEW
// handleCount---> CONTROLLER
// count--->MODEL

// var [count, setCount] = useState(0)

// const handleCount=()=>{
//   count++
//   console.log(count)
// }

// return (
//   <>
//       <button onClick={handleCount}>
//         count is {count}
//       </button>
      
//   </>
// )
// }