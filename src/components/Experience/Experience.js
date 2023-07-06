import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Experience = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='experience'>
        <div className='achievement'>
            <div className='circle' style={{border : darkMode ? '8px solid #3c8a96' : ''}}>8+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className='achievement'>
            <div className='circle' style={{border : darkMode ? '8px solid #3c8a96' : ''}}>20+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className='achievement'>
            <div className='circle' style={{border : darkMode ? '8px solid #3c8a96' : ''}}>5+</div>
            <span>companies</span>
            <span>work</span>
        </div>

    </div>
  )
}

export default Experience