import React from 'react'
import { Link } from 'react-router-dom'

const navData=[
    {title:"HOME",link:"/"},
    {title:"USERS",link:"/allUsers"},
    {title:"LOGIN",link:"/login"}
]

const NavBar = () => {

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"pink",height:"50px",margin:"10px"}}>
     {
       navData.map((elem)=>
       <Link key={elem.link} to={elem.link}>{elem.title}</Link> 
       )
     }
    </div>
  )
}

export default NavBar