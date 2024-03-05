import React from 'react'
import { Link } from 'react-router-dom'

const SingleCard = ({id,first_name,last_name,avatar,email}) => {
  return (
    <div style={{border:"2px solid black",width:"350px",margin:"10px"}}>
      <img src={avatar} alt="PROFILE"/>
      <p>{first_name} {last_name}</p>
      <p>{email}</p>
      <Link to={`/userDetail/${id}`}><button>MORE DETAILS</button></Link>
    </div>
  )
}

export default SingleCard


