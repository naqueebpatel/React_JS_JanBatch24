import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard';

const AllUsers = () => {

  const [data,setData]=useState([]);
  const [page,setPage]=useState(1)

  useEffect(()=>{
      getData()
  },[page])

  

  const getData=async()=>{
       const response=await fetch(`https://reqres.in/api/users?page=${page}`)
       const apiData=await response.json();
       console.log(apiData.data)
        setData(apiData.data)
  }


  return (
    <>
    <div>
      <button onClick={()=>{setPage(page-1)}}>PREVIOUS</button>
      <p>{page}</p>
      <button onClick={()=>{setPage(page+1)}}>NEXT</button>
    </div>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
      {
          data.map((elem)=>
            <SingleCard key={elem.id} {...elem}/>
          )
      }
    
    </div>
    </>
  )
}

export default AllUsers