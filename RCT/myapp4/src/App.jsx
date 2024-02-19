
import { useState } from 'react';
import './App.css'


// const MyButton=()=>{
//   return (
//     <button>CLICK ME</button>
//   )
// }

function App() {
  
//  const [value,setValue]=useState(0);

//   // var value=0;

//   const handleIncrement=()=>{
//     setValue(value+1)
//   }

//   const handleDecrement=()=>{
//     setValue(value-1)
//   }

//   //rendering and refreshing
//   console.log("RENDERING",value)

const [post,setPost]=useState([])// res-->Array of Object 
const [loading,setLoading]=useState(false)
const [error,setError]=useState(false)

const handlePost=()=>{
  setLoading(true)
  fetch("https://jsonplaceholder.typicoe.com/posts")
  .then(res=>res.json())
  .then((res)=>{
    console.log(res)
    setLoading(false)
    setPost(res)
  }).catch((err)=>{
    console.log(err)
    setLoading(false)
    setError(true)
  })
}

if(loading){
  return <p>LOADING....</p>
}

if(error){
  return <p>ERROR 404!</p>
}
  
  return (
    <>
      {/* <p>VALUE::{value}</p>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button> */}
      POST
      <button onClick={handlePost}>GET POSTS!</button>
      {
        post?.map((elem)=>(
          <div key={elem.id}>
            <p>{elem.title}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

// useState hook
// --> useState causes re-renders when the state changes.
// --> used to manage the state inside a component

// const [getter,setter]=useState(intialValue)
// //ARRAY DESTRUCTURING


// function useState(initValue){
    
//   var value=initValue
  
//   function getter(){
//       return value
//   }
  
//   function setter(val){
//       this.value=val
//   }
  
//   return [getter(),setter]
  
// }

// //array destructuring

// const [value,setValue]=useState(10);

// console.log(value)

