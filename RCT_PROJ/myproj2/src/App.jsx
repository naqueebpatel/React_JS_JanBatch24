import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [post,setPost]=useState([])
  const [isLoading,setLoading]=useState(false)
  const [page,setPage]=useState(1)

  useEffect(()=>{
    fetchPost()
  },[page])
// --> only on the initial run

  const fetchPost=async()=>{
    setLoading(true)
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    const data= await response.json()
    setLoading(false)
    console.log(data)
    setPost(data)
  }

  if(isLoading){
    return <h1>LOADING....</h1>
  }
  

  return (
    <>
      <h4>POST</h4>
      <button onClick={()=>{setPage(page-1)}}>PREVIOUS</button>
      <span>{page}</span>
      <button onClick={()=>{setPage(page+1)}}>NEXT</button>

      {
        post?.map((elem)=>(
          <div key={elem.id} style={{border:"1px solid red",margin:"15px"}}>
            <h6>{elem.title}</h6>
            <p>{elem.body}</p>

          </div>
        ))
      }
    </>
  )
}

export default App
