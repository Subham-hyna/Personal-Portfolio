import React, { useState } from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Navbar = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const[mobileMenu, setMobileMenu] = useState(false);
    
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Subham</div>
            <Toogle />
        </div>
        <div className='n-right'>
            <div className='n-list'  style={{right: mobileMenu ? '0px' : ''}}>
                <ul>
                    <i className='fas fa-times n-cross' onClick={()=>{setMobileMenu(false)}}></i>
                    <li> <a href='#home' style={{color : darkMode ? 'white' : ''}} onClick={()=>{setMobileMenu(false)}}>Home</a></li>
                    <li> <a href='#about' style={{color : darkMode ? 'white' : ''}} onClick={()=>{setMobileMenu(false)}}>About</a></li>
                    <li> <a href='#services' style={{color : darkMode ? 'white' : ''}} onClick={()=>{setMobileMenu(false)}}>Services</a></li>
                    <li> <a href='#projects' style={{color : darkMode ? 'white' : ''}} onClick={()=>{setMobileMenu(false)}}>Projects</a></li>
                </ul>
            </div>
            <i className='fas fa-bars n-bars' onClick={()=>{setMobileMenu(true)}}></i>
            <a href='#contact'>
            <button className='button n-button'>Contact</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar