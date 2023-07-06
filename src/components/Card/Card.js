import React from 'react'
import './Card.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Card = (props) => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='card'>
        <img src={props.emoji} />
        <span style={{color : darkMode ? 'white' : ''}}>{props.heading}</span>
        <span style={{color : darkMode ? 'white' : ''}}>{props.detail}</span>
        <a href='#projects'>
        <button className='c-button'>LEARN MORE</button>
        </a>
    </div>
  )
}

export default Card