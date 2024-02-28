import React from 'react'
import "./CommonModal.css"


const CommonModal = ({closeModal,elem}) => {
  return (
    <>
    <div className='modal-overlay' key={elem.id}>
    <div className='modal'>
    <div className='modalDiv'>
     <img className="cardImage" src={`https://robohash.org/${elem.id}?size=200x200`} alt="PROFILE"/>
     <h4><b>NAME</b>::{elem.name}</h4>
     <h4><b>EMAIL</b>::{elem.email}</h4>
     <h4><b>PHONE</b>::{elem.phone}</h4>
     <button onClick={closeModal}>CLOSE</button>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default CommonModal