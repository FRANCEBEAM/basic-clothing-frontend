import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import TopClothList from './TopClothList';
// import useFetch from '../../hooks/useFetch';
import { topClothes } from './ContentTemplate';

const TopCloth = () => {

  // const { data: topClothes } = useFetch('../../db.json') 


  return (
    <>
        <div className='w-full h-full p-3 py-20 max-w-[1280px] m-auto lg:p-0 lg:py-24'>
            <div data-aos="zoom-in-right" className='flex items-center gap-6'>
                <h1 className='uppercase text-4xl font-bold text-black lg:text-6xl'>unleash</h1>
                <Icon className='text-black' icon="ph:sparkle" fontSize={55} />
            </div>
            <div>
                <h1 data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="200" className='uppercase text-4xl font-bold text-black lg:text-6xl'>your style with basic</h1>
                <p className='pt-5 text-black uppercase text-base lg:text-2xl'>Where Fashion Meets Expression</p>
            </div>

            <div className='w-full h-full pt-16'>
              {/* { topClothes && <TopClothList topClothes={topClothes} /> } */}
              <TopClothList topClothes={topClothes} />
            </div>
        </div>   
    </>
  )
}

export default TopCloth