import React from 'react'

const ImageComponent = ({id,desc,src}) => {
  return (
    <div key={id} style={{border:"2px solid black",width:"220px",height:"300px"}}>
        <h6>{desc}</h6>
        <img
        style={{width:"200px",height:"250px"}}
        src={src}
        alt='NATURE'/>
    </div>
  )
}

export default ImageComponent