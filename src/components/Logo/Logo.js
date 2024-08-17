import React from 'react'
import {Link} from 'react-router-dom'
import './Logo.css'
import { symbols } from '../../assets/assets'

function Logo() {

  return (
    <div className='Logo-nav'>
        <img src={symbols.newlogo} className='Logo'></img>
        <Link to='/'></Link>
    </div>
  )
}

export default Logo