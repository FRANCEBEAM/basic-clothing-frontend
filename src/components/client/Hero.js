import React, { useState, useEffect } from 'react'
import { HeroImages } from './ContentTemplate'

const Hero = () => {
    // const [currentImage, setCurrentImage] = useState(HeroImages[0].image);
    // const [currentContent, setCurrentContent] = useState(HeroImages[0].content);

    // useEffect(() => {
    //     const interval = setInterval(()=> {
    //         const randomIndex = Math.floor(Math.random() * HeroImages.length);
    //         setCurrentImage(HeroImages[randomIndex].image);
    //         setCurrentContent(HeroImages[randomIndex].content);
    //     }, 5000);

    //     return () => {
    //         clearInterval(interval)
    //     };
    // }, [])

  return (
    <>
        <h1>HELLO WORLD</h1>
        <div className='pt-[200px]'>
            {
            HeroImages.map((img, index) => (
                    <div className='w-full h-full' key={index.id}>
                    <img className='w-full h-full' src={img.image} alt="Hero" />
                    <p>{img.text}</p>
                    </div>
                ))
            }
        </div>  
    </>
  )
}

export default Hero