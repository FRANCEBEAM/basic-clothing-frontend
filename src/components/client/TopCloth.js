import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import TopClothList from './TopClothList';

const TopCloth = () => {
  const [topClothes, setTopClothes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/topClothes')
      .then( res => {
        if (!res.ok) {
          throw Error ('Couldnt fetch data')
        }
        return res.json()
      })
      .then((data) => {
        setTopClothes(data)
      })
      .catch((err) => {
        console.log(err.message)
        setError(err.message)
      })
  }, []);

  return (
    <>
        <div className='w-full h-full p-3 py-20 max-w-[1280px] m-auto lg:p-0 lg:py-24'>
            <div className='flex items-center gap-6'>
                <h1 className='uppercase text-4xl font-bold text-black lg:text-6xl'>unleash</h1>
                <Icon className='text-black' icon="ph:sparkle" fontSize={55} />
            </div>
            <div>
                <h1 className='uppercase text-4xl font-bold text-black lg:text-6xl'>your style with basic</h1>
                <p className='pt-5 text-black uppercase text-base lg:text-2xl'>Where Fashion Meets Expression</p>
            </div>

            <div className='w-full h-full pt-16'>
              {
                error ? (
                  <div className='text-red-500'>
                    {error}
                  </div>
                ) : (
                  <TopClothList topClothes={topClothes} />
                )
              }
            </div>
        </div>   
    </>
  )
}

export default TopCloth