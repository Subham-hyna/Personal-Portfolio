import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} style={{width : '100%'}} />
        <div className='f-content'>
        <span style={{cursor:"pointer"}}><a href = "mailto: dsubham490@gmail.com" style={{textDecoration : 'none', color: 'white'}}>dsubham490@gmail.com</a></span>
        <div className='f-icons'>
            <a href='https://github.com/Subham-hyna' target='_' ><i className="fa-brands fa-github fa-2xl"></i></a>
            <a href='https://www.linkedin.com/in/subhamdutta02' target='_' ><i className="fa-brands fa-linkedin fa-2xl"></i></a>
            <a href='https://www.instagram.com/_________.subham/' target='_' ><i className="fa-brands fa-instagram fa-2xl"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer