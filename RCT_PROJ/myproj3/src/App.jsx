import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommonCard from './components/CommonCard/CommonCard'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState([]);
  
  useEffect(()=>{
     getData()
  },[])

  const getData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const apiData= await response.json()
    console.log(apiData)
    setData(apiData)
  }

  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around"}}>
    {
      data.map((elem)=>
      <CommonCard key={elem.id} {...elem}/>
      )
    }
    </div>
    </>
  )
}

export default App
