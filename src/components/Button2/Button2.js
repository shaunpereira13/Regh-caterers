import React from 'react'
import './Button2.css'

function Button2(props) {
  return (
    <div  className='non-color-button debug'>
          {props.path? ( <img src={props.path} alt="Image" />):(<img style={{ display: 'none' }} alt="Hidden Image" />)}
          <span>{props.data}</span>
    </div>
  )
}

export default Button2