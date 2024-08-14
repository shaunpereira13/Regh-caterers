import React from 'react'
import  './HeroBanner.css'
import Button1 from '../Button1/Button1'
import Button2 from '../Button2/Button2'
import { symbols } from '../../assets/assets'


function HeroBanner() {
  return (
    <>
    <div className='hero-banner'>
       <div className="hero-text">
        <div className='eye-brow'>
            <img src={symbols.flame}/>
            <p>Best Catering Service</p>
        </div>
        <h1>Special occasion </h1>
        <h1>deserves Special foode </h1><br></br>
        <p className='p-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
        <div className='buttons'>
            <Button1 data="Order Now" path={symbols.trucktick}></Button1>
            <Button2 data="View More"></Button2>
        </div>
        </div>
    </div>
        
    </>
  )
}

export default HeroBanner;