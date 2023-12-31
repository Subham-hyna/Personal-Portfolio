import React from 'react'
import './Toogle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Toogle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () =>{
        theme.dispatch({type: 'toogle'})
    }

  return (
    <div className='toogle' onClick={handleClick}>
        <Moon width="1rem" height="1rem" color="var(--orange"/>
        <Sun width="1rem" height="1rem" color="var(--orange"/>
        <div className='t-button' 
        style={darkMode ?{left : '2px'} : {right : '2px'}}>

        </div>
    </div>
  )
}

export default Toogle