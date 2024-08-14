import React from 'react'
import './Button1.css'

function Button1(props) {
    
  return (
    <div className='color-button'>
     {props.path? ( <img src={props.path} alt="Image" />):(<img style={{ display: 'none' }} alt="Hidden Image" />)}
      {props.data}
      </div>
  )
}

export default Button1