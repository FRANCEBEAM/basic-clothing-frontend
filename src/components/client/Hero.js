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
            setCurrentImage(HeroImages[randomIndex].image);
            setCurrentText(HeroImages[randomIndex].text);
            setCurrentSubhead(HeroImages[randomIndex].subHead);
            setCurrentSubText(HeroImages[randomIndex].subText);
        }, 1000);

        return () => {
            clearInterval(interval)
        };
    }, [])

  return (
    <>
      <div className='w-full h-screen'>
        <div className='w-full h-screen bg-black absolute z-10 opacity-60'></div>
        <img className='w-full absolute h-screen bg-gradient-to-l from-[#000000] object-cover' src={currentImage} alt="Hero" />

        <div className='relative m-auto max-w-[1280px] top-[190px] z-50'>
          <h3 className='hidden uppercase text-white lg:inline-flex lg:rotate-90 lg:absolute lg:right-0'>{currentSubHead}</h3>
          <h1 className='uppercase font-bold text-white p-3 text-6xl leading-tight sm:w-[700px] md:w-[600px] md:text-7xl lg:p-0 lg:w-[950px] lg:text-8xl'>{currentText}</h1>
          <p className='hidden uppercase text-white lg:inline-flex'>{currentSubText}</p>
          <div className='pt-10'>
            <Link className='p-4' to='/'>
              <button className='uppercase font-bold bg-white p-3 px-7 text-base relative cursor-pointer'>Shop Now</button>
            </Link>
          </div>
        </div>

      </div>  
    </>
  )
}

export default Hero