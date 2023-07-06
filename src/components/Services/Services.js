import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Services = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='services'>

        {/* left Side */}
        <div className='awesome'>
            <span style={{color : darkMode ? 'white' : ''}}>My Awesome</span>
            <span>services</span>
            <span>
            Unleashing the Power of Creativity: Transforming
            <br />
            Ideas into Engaging Digital Solutions. From
            <br />
            captivating web development to stunning
            <br />
            photography and eye-catching graphic designs, 
            <br />
            I offer a range of services that bring your vision 
            <br />
            to life. Let's collaborate and create something remarkable together.
            </span>
            <a href='#contact'>
            <button className='button s-button'>Hire me</button>
            </a>
            <div className='blur s-blur1' style={{background : '#ABF1FF94'}}></div>
        </div>

        {/* right Side */}
        <div className='cards'>
            <div style={{left : '14rem'}}>
                <Card 
                    emoji = {HeartEmoji}
                    heading = "Design"
                    detail = "Illustrator, Photoshop, Adobe XD"
                />
            </div>

            <div style={{ top : '12rem', left : '-4rem'}}>
                <Card 
                    emoji = {Glasses}
                    heading = "Developer"
                    detail = "Html, Css, JavaScript, React"
                />
            </div>

            <div style={{ top : '19rem', left : '12rem'}}>
                <Card 
                    emoji = {Humble}
                    heading = "Photographer"
                    detail = "Powerful Storytelling Through Photography."
                />
            </div>
            <div className='blur s-blur2' style={{ background : "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services