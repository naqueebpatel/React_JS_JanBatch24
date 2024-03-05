import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {

  const {id}=useParams()
  console.log(id)

  const [user,setUser]=useState([])
   
  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const response=await fetch(`https://reqres.in/api/users/${id}`)
    const data=await response.json()
    console.log(data)
    setUser([data])
  }
  return (
    <div>
        {
            user.map((elem)=>
            <div key={elem.id} style={{border:"2px solid black"}}>
            <img style={{width:"250px",borderRadius:"50%"}} src={elem.data.avatar} alt="PROFILE"/>
            <p>{elem.data.first_name} {elem.data.last_name}</p>
            <p>{elem.data.email}</p>
            <p>{elem.support.text}</p>
            <p>{elem.support.url}</p>
            </div>    
            )
        }
    </div>
  )
}

export default SingleUser