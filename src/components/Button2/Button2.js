import React from 'react'
import './Button2.css'

function Button2(props) {
  return (
    <div  className='non-color-button'>
        <p>{props.data}</p>
    </div>
  )
}

export default Button2