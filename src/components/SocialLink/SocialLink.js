import React from 'react'
import './SocialLink.css'
const SocialLink = () => {
  return (
    <div className='social-links'>
        <a href='https://www.linkedin.com/in/subhamdutta02' target='_8' style={{textDecoration : 'none', color:'white'}}>
        <div className='social-tab' style={{ paddingTop :'15px'}}>
            <span>Linkedin</span>
            <i className="fa-brands fa-linkedin fa-2xl"></i>
        </div>
            </a>
        <a href='https://www.instagram.com/in/subhamdutta02' target='_9' style={{textDecoration : 'none', color:'white'}}>
        <div className='social-tab'>
            <span>Instagram</span>
            <i className="fa-brands fa-instagram fa-2xl"></i>
        </div>
            </a>
        <a href='https://www.facebook.com/subham.dutta.37604303' target='_10' style={{textDecoration : 'none', color:'white'}}>
        <div className='social-tab'>
            <span>Facebook</span>
            <i className="fa-brands fa-square-facebook fa-2xl"></i>
        </div>
            </a>
        <a href='https://github.com/Subham-hyna' target='_11' style={{textDecoration : 'none', color:'white'}}>
        <div className='social-tab' style={{ paddingBottom :'15px'}}>
            <span>Github</span>
            <i className="fa-brands fa-github fa-2xl"></i>
        </div>
        </a>
    </div>
  )
}

export default SocialLink


            
        