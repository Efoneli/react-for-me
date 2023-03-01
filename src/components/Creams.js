import React from 'react'
import './Creams.css';


const Creams = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt='/' className='card--image'/>
        <h1>{props.name}</h1>
        <div className='info-group'>
        ☎️ {props.contact} <br />
        </div>
        ⭐ {props.review}
    </div>
  )
}

export default Creams