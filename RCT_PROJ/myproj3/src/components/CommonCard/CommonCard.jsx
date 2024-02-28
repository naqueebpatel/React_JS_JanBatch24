import React, { useState } from 'react'
import "./CommonCard.css"
import CommonModal from '../CommonModal/CommonModal'

const CommonCard = ({elem}) => {

  const [isModal,setModal]=useState(false)

  const openModal=()=>{setModal(true)}
  const closeModal=()=>{setModal(false)}


  return (
    <>
    <div className='mainDiv'>
     <img className="cardImage" src={`https://robohash.org/${elem.id}?size=200x200`} alt="PROFILE"/>
     <h4>{elem.name}</h4>
     <button onClick={openModal}>VIEW DETAILS</button>
    </div>
    {/* //conditional rendering */}

    {
      isModal && <CommonModal closeModal={closeModal} elem={elem}/>
    }
    </>
  )
}

export default CommonCard

//code skeleton