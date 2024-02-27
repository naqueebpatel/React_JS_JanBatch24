import React from 'react'
import "./CommonCard.css"

const CommonCard = ({id,name}) => {
  return (
    <>
    <div className='mainDiv'>
     <img className="cardImage" src={`https://robohash.org/${id}?size=200x200`} alt="PROFILE"/>
     <h4>{name}</h4>
     <button>VIEW DETAILS</button>
    </div>
    </>
  )
}

export default CommonCard

//code skeleton