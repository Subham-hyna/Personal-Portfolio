import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Internshala from '../../img/Internshala.png'
import Freelauncer from '../../img/Freelauncer.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Works = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works' id='work'>
        <div className='awesome'>
            <span style={{color : darkMode ? 'white' : ''}}>Works for All</span>
            <span>Brands & Clients</span>
            <span>
            Available for Freelance Projects: Showcasing
            <br />
            a collection of my web development, 
            <br />
            photography, and design work.
            <br /> 
            Let's collaborate on your next project.
            </span>
            <a href='mailto: dsubham490@gmail.com'>
            <button className='button s-button'>Hire me</button>
            </a>
            <div className='blur s-blur1' style={{background : '#ABF1FF94'}}></div>
        </div>

        <div className='w-right'>
            <div className='w-mainCircle'>
                <div className='w-semiCircle' style={{boxShadow: '4px 2px 13px 1px #367814'}}>
                    <img src={Upwork} />
                </div>
                <div className='w-semiCircle' style={{boxShadow: '4px 2px 13px 1px #288fe4'}}>
                    <img src={Internshala}  style={{width:'100px', borderRadius : '100%'}} />
                </div>
                <div className='w-semiCircle' style={{boxShadow: '0px -2px 24px -2px var(--orange)'}}>
                    <img src={Amazon} />
                </div>
                <div className='w-semiCircle' style={{boxShadow: '4px 2px 13px 1px #0ea5e9'}}>
                    <img src={Freelauncer} style={{width: '120px'}}/>
                </div>
                <div className='w-semiCircle' style={{boxShadow: '4px 2px 13px 1px #44403c'}}>
                    <img src={Fiverr} />
                </div>
            </div>

            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Works