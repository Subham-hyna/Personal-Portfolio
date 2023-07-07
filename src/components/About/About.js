import React, { useState } from 'react'
import './About.css'
import Subham from './Subham.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import HTML from './LOGO/HTML.png'
import CSS from './LOGO/CSS.png'
import JS from './LOGO/JS.png'
import Illustrator from './LOGO/Illustrator.png'
import Photoshop from './LOGO/Photoshop.png'
import Premiere from './LOGO/Premiere.png'
import C from './LOGO/C.png'
import Cpp from './LOGO/C++.png'
import Git from './LOGO/GIT.png'
import Node from './LOGO/Node.png'
import Express from './LOGO/EXPRESS.png'
import Mongodb from './LOGO/Mongodb.png'
import Tailwind from './LOGO/Tailwind.png'
import Bootstrap from './LOGO/Bootstrap.png'
import ReactLogo from './LOGO/REACT.png'
import Jquery from './LOGO/Jquery.png'

const About = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const[activeLink , setActiveLink] = useState('skills')
    const[activeTab , setActiveTab] = useState('skills')

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
        setActiveTab(value);
    }
  return (
    <div className='about' id='about'>
        <div className='a-left'>
            <img src={Subham} alt='Subham-Profile'/>
        </div>
        <div className='a-right'>
            <div className='a-name'>About Me</div>
            <span>Welcome to my creative world where technology, art, and design converge! I am a versatile professional with expertise in full stack web development, photography, and graphics design. With a passion for innovation, I bring imaginative concepts to life through stunning digital experiences. From crafting visually appealing websites to capturing captivating moments and creating visually captivating designs, I seamlessly integrate design, development, and photography to create remarkable digital experiences. Let's collaborate and bring your vision to life. </span>
            <div className='a-tabs'>
                <span className={activeLink === 'skills' ? 'tab-links active-link':'tab-links'} style={{color : darkMode ? 'white' : ''}} onClick={()=>{ onUpdateActiveLink('skills')}}>Skills</span>
                <span className={activeLink === 'education' ? 'tab-links active-link':'tab-links'} style={{color : darkMode ? 'white' : ''}} onClick={()=>{ onUpdateActiveLink('education')}}>Education</span>
                <span className={activeLink === 'languages' ? 'tab-links active-link':'tab-links'} style={{color : darkMode ? 'white' : ''}} onClick={()=>{ onUpdateActiveLink('languages')}}>Languanges</span>
            </div>
            <div className={activeTab === 'skills' ? 'a-tabContents active-tab':'a-tabContents'} id="skills">
                <span>These are the technologies I've worked with</span>
                <div className='skill-icons'>
                    <div className='skill-box' style={{	boxShadow:' 0 4px 6px -1px #f97316, 0 2px 4px -2px #f97316'}}>
                            <img src={HTML} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>HTML</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #3b82f6, 0 2px 4px -2px #3b82f6'}}>
                            <img src={CSS} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>CSS</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #eab308, 0 2px 4px -2px #eab308'}}>
                            <img src={JS} style={{width : '80px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>JS</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #1d4ed8, 0 2px 4px -2px #1d4ed8'}}>
                            <img src={C} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>C</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #1d4ed8, 0 2px 4px -2px #1d4ed8'}}>
                            <img src={Cpp} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>C++</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #c2410c, 0 2px 4px -2px #c2410c'}}>
                            <img src={Git} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>Git</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #059669, 0 2px 4px -2px #059669'}}>
                            <img src={Node} style={{width : '50px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>Node Js</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #78716c, 0 2px 4px -2px #78716c'}}>
                            <img src={Express} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>Express Js</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #4ade80, 0 2px 4px -2px #4ade80'}}>
                            <img src={Mongodb} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>MongoDB</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #0ea5e9, 0 2px 4px -2px #0ea5e9'}}>
                            <img src={ReactLogo} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>React</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #06b6d4, 0 2px 4px -2px #06b6d4'}}>
                            <img src={Tailwind} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>Tailwind</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #8b5cf6, 0 2px 4px -2px #8b5cf6'}}>
                            <img src={Bootstrap} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>Bootstrap</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #1d4ed8, 0 2px 4px -2px #1d4ed8'}}>
                            <img src={Jquery} style={{width : '40px', borderRadius : '100%'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>JQuery</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #0f766e, 0 2px 4px -2px #0f766e'}}>
                            <img src={Photoshop} style={{width : '70px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>Photoshop</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #4338ca, 0 2px 4px -2px #4338ca'}}>
                            <img src={Premiere} style={{width : '50px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>Premiere</span>
                    </div>
                    <div className='skill-box' style={{boxShadow:' 0 4px 6px -1px #92400e, 0 2px 4px -2px #945c04'}}>
                            <img src={Illustrator} style={{width : '40px'}}/>
                            <span style={{color : darkMode ? 'white' : ''}}>Illustrator</span>
                    </div>
                </div>
            </div>
            <div className={activeTab === 'education' ? 'a-tabContents active-tab':'a-tabContents'} id="education">
                <ul>
                    <li><span>2021 - Present</span><br/>B.Tech, National Institute of Technology, Silchar</li>
                    <li><span>2018 - 2020</span><br/>Higher Secondary, C V Raman Academy of Science</li>
                    <li><span>2008 - 2018</span><br/>Oasis Academy</li>
                </ul>
            </div>
            <div className={activeTab === 'languages' ? 'a-tabContents active-tab':'a-tabContents'} id="languages">
            <div className='language'>
                <ul>
                    <li style={{marginBottom : '30px'}}><span>English</span><br/>⭐⭐⭐⭐</li>
                    <li><span>Hindi</span><br/>⭐⭐⭐⭐</li>
                </ul>
                <ul>
                    <li style={{marginBottom : '30px'}}><span>Bengali</span><br/>⭐⭐⭐⭐⭐</li>
                    <li><span>Assamese</span><br/>⭐⭐⭐⭐⭐</li>
                </ul>
            </div>
            </div>
        </div>
            <div className='blur a-blur1' style={{background : '#C1F5FF'}}></div>
    </div>
  )
}

export default About