import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Notes_Keeper from './Projects/Notes_Keeper.png'
import Weather from './Projects/Weather.png'
import Text_Analyzer from './Projects/Text_Analyzer.png'
import Microsoft from './Projects/Microsoft.png'
import Per_Portfolio from './Projects/Per_Portfolio.png'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='projects'>

    {/* heading */}
    <span style={{color : darkMode ? 'white' : ''}}>Recent Projects</span>
    <span>Portfolio</span>

    {/* slider */}
    <Swiper
        style={{"--swiper-navigation-size": "25px","--swiper-navigation-color":"var(--orange"}}
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='portfolio-slider'
    >
        <SwiperSlide>
            <img src={Notes_Keeper} />
            <div className='links'>
                <a href='https://github.com/Subham-hyna/Notes-Keeper' target='_1'>
                <button className='p-button'>Code</button>
                </a>
                <a href='https://notes-keeper-t1cm.onrender.com/' target='_2'>
                <button className='p-button'>Live</button>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Weather} />
            <div className='links'>
            <a href='https://github.com/Subham-hyna/Weather-App' target='_3'>
                <button className='p-button'>Code</button>
            </a>
            <a href='https://subham-hyna.github.io/Weather-App/' target='_4'>
                <button className='p-button'>Live</button>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Text_Analyzer} />
            <div className='links'>
            <a href='https://github.com/Subham-hyna/Text-Analyzer' target='_5'>
                <button className='p-button'>Code</button>
            </a>
            <a href='https://subham-hyna.github.io/Text-Analyzer/' target='_6'>
                <button className='p-button'>Live</button>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Microsoft} />
            <div className='links'>
                <a href='https://github.com/Subham-hyna/Microsoft-Clone' target='_7'>
                <button className='p-button'>Code</button>
                </a>
                <a href='https://microsoft-clone.onrender.com/' target='_14'>
                <button className='p-button'>Live</button>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Per_Portfolio} />
            <div className='links'>
                <a href='https://github.com/Subham-hyna/Personal-Portfolio' target='_7'>
                <button className='p-button'>Code</button>
                </a>
                <a href='https://subham-personal-portfolio.netlify.app/' target='_13'>
                <button className='p-button'>Live</button>
                </a>
            </div>
        </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Portfolio
