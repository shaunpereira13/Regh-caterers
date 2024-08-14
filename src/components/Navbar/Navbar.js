import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Logo from '../Logo/Logo'
import Button1 from '../Button1/Button1'
import { symbols } from '../../assets/assets'
// import Button2 from './Components/Button2'



function Navbar() {
    const [click,setClick]=useState(false);
    const[button,setButton]=useState(true)

    const handleClick=()=>setClick(!click)
    const closeMobileMenu=()=>setClick(false)

    const showButton=()=>
    {
        if(window.innerWidth<=960)
        {
            showButton(true)
        }
        else
        {
            showButton(false)
        }
    }
  return (
    <>
        <nav className='navbar' >
            <div className='navbar-container'>
            <div className='navbar-logo-m'>
                        <Logo></Logo>
                    </div>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
             </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='navbar-logo'>
                 
                        <Logo></Logo>

                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                <li className='nav-item'>
                    <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/ourmenu' className='nav-links' onClick={closeMobileMenu}>Our Menu</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
                </li>
              
                <li className='nav-item' onCoad={showButton}>
                    <Button1 data="(+91) 9999999999" path={symbols.trucktick}></Button1>
                </li>
            </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar