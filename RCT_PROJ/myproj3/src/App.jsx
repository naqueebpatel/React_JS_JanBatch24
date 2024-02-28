import { useEffect, useState } from 'react'
import './App.css'
import CommonCard from './components/CommonCard/CommonCard'
import CommonModal from './components/CommonModal/CommonModal';

function App() {
  const [data,setData]=useState([]);  //filter--> we want it to be preserved
  const [mapData,setMapData]=useState([]) //we will use it to map components
  
  useEffect(()=>{
     getData()
  },[])

  const getData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const apiData= await response.json()
    console.log(apiData)
    setData(apiData)
    setMapData(apiData)
  }
 
  const handleChange=(event)=>{
    const {value}=event.target
    console.log(value)
    // filterData(value)
    const newData=data.filter(elem=>elem.name.toLowerCase().includes(value.toLowerCase()) ? true :false)
    setMapData(newData)
  }

   
  // const filterData=(searchTerm)=>{
  //   const newData=data.filter(elem=>elem.name.toLowerCase().includes(searchTerm.toLowerCase()) ? true :false)
  //   setMapData(newData)
  // }

  return (
    <>
    <input className="searchBox" type='text' placeholder='SEARCH USER..' onChange={handleChange} />
    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around"}}>
    {
      mapData.length>0 ? mapData.map((elem)=>
      <CommonCard key={elem.id} elem={elem}/>
      ) :  <h3> NO DATA AVAILABLE</h3>
    }  
  
    </div>
    </>
  )
}

export default App
