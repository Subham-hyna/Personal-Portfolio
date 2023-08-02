import React from 'react'
import './Intro.css'
import spaceship from '../../img/spaceship.svg'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import Resume from './Subham_Resume.pdf'

const Intro = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro' id='home'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{color : darkMode ? 'white' : ''}}>Hi! I Am</span>
                <span>Subham Dutta</span>
                <TypeWriterEffect
                        textStyle={{
                          color:darkMode ? 'white' : '#3F3D56',
                          fontWeight: 500,
                          fontSize: '2.5em',
                        }}
                        cursorColor={darkMode ? 'white' : '#3F3D56'}
                        multiText={[
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Web Developer, Web Designer',
                          'UI/UX Designer',
                          'Photographer, Video Editor',
                          'Web Developer, Web Designer',
                          'UI/UX Designer',
                          'Photographer, Video Editor',
                          'Web Developer, Web Designer',
                          'UI/UX Designer',
                          'Photographer, Video Editor',
                          'Web Developer, Web Designer',
                          'UI/UX Designer',
                          'Photographer, Video Editor',
                          'Web Developer, Web Designer',
                          'UI/UX Designer',
                          'Photographer, Video Editor',
                          'Web Developer, Web Designer',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                          'Photographer, Video Editor',
                          'UI/UX Designer',
                          'Web Developer, Web Designer',
                        ]}
                        nextTextDelay={1500}
                        typeSpeed={90}
                        loop={true}
                      />
                <span>Fullstack Developer with intermediate level of Experience
                in web designing and development, producing and Quality 
                work</span>
            </div>
            <a href="https://drive.google.com/file/d/1EIzHyxVfE4u-BIkrYRqGCrU3k_6kPLKb/view?usp=drive_link" targer="_blank" download>
            <button className='button i-button'>Download CV</button>
            </a>

            <div className='i-icons'>
            <a href='https://github.com/Subham-hyna' target='_' ><i className="fa-brands fa-github fa-2xl"></i></a>
            <a href='https://www.linkedin.com/in/subhamdutta02' target='_' ><i className="fa-brands fa-linkedin fa-2xl"></i></a>
            <a href='https://www.instagram.com/_________.subham/' target='_' ><i className="fa-brands fa-instagram fa-2xl"></i></a>
            </div>
        </div>
        <div className='i-right'>
            <img src={spaceship} />
            <div className='blur' 
            style={{background : 'rgb(238 210 255)'}}></div>
            <div className='blur' 
            style={{background : '#C1F5FF',
                    top : '17rem',
                    width : '21rem',
                    height : '11rem',
                    left : '-9rem'}}></div>
        </div>

    </div>
  )
}

export default Intro