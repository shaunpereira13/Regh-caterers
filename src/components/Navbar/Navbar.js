import React,{useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Navbar.css'
import Logo from '../Logo/Logo'
import Button1 from '../Button1/Button1'
import { symbols } from '../../assets/assets'
// import Button2 from './Components/Button2'



function Navbar() {
    const [click,setClick]=useState(false);
    const[button,setButton]=useState(true);

    const handleClick=()=>setClick(!click)
    const closeMobileMenu=()=>setClick(false)

    const location =useLocation();
    const linkStyle=(path)=>({
            color:location.pathname === '/' ?'white':'black'
        });
    

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
                <Link to='/' onClick={closeMobileMenu}><Logo/></Link>
                        

                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' style={linkStyle('/')} onClick={closeMobileMenu}>Home</Link></li>
                <li className='nav-item'>
                    <Link to='/aboutus' className='nav-links' style={linkStyle('/aboutus')} onClick={closeMobileMenu}>About Us</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' style={linkStyle('/services')} onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/ourmenu' className='nav-links'style={linkStyle('/ourmenu')} onClick={closeMobileMenu}>Our Menu</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' style={linkStyle('/contact')} onClick={closeMobileMenu}>Contact Us</Link>
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