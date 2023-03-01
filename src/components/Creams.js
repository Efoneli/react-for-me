import React from 'react'
import './Creams.css';


const Creams = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt='/'/>
        <h1>{props.name}</h1>
        <div>
            ☎️ {props.contact}
        </div>
    </div>
  )
}

export default Creams