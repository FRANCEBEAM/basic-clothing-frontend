import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HeroImages } from './ContentTemplate'


const Hero = () => {
    const [currentImage, setCurrentImage] = useState(HeroImages[0].image);
    const [currentText, setCurrentText] = useState(HeroImages[0].text);
    const [currentSubHead, setCurrentSubhead] = useState(HeroImages[0].subHead);
    const [currentSubText, setCurrentSubText] = useState(HeroImages[0].subText);

    useEffect(() => {

        const interval = setInterval(()=> {
            const randomIndex = Math.floor(Math.random() * HeroImages.length);
            setCurrentText(HeroImages[randomIndex].text);
            setCurrentImage(HeroImages[randomIndex].image);
            setCurrentSubhead(HeroImages[randomIndex].subHead);
            setCurrentSubText(HeroImages[randomIndex].subText);
          }, 5000);
        
          
        return () => {
          clearInterval(interval)
        };

    }, [])

  return (
    <>
      <div className='w-full min-h-screen'>
        <div className='w-full h-screen bg-black absolute z-10 opacity-70'></div>
        <img className='w-full absolute h-screen bg-gradient-to-l from-[#000000] object-cover' src={currentImage} alt="Hero" />

        <div className='absolute m-auto max-w-[1280px] w-full z-[11] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='m-auto w-full pt-28 max-w-[1280px]'>
            <h3 className='hidden uppercase text-white lg:inline-flex lg:rotate-90 lg:relative lg:max-w-[1280px] lg:left-[899px] lg:tracking-widest'>{currentSubHead}</h3>
            <h1 data-aos="fade-right" className='uppercase font-bold text-white p-3 text-7xl leading-tight max-w-[900px] md:text-7xl lg:p-0 lg:text-8xl'>{currentText}</h1>
            <p className='hidden uppercase text-fadeFont lg:inline-flex lg:absolute lg:right-0 lg:top-[450px] lg:px-4 lg:bottom-0'>{currentSubText}</p>
            <div className='p-3 pt-10'>
              <Link to='/'>
                <button className='uppercase font-bold bg-white p-3 px-7 text-base relative cursor-pointer rounded-sm hover:bg-[#a1a1a1] transition-all ease-in-out duration-300'>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Hero