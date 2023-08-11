import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

const TopClothList = ({topClothes}) => {
    
  return (
    <>
        {
            topClothes.map((topClothe, index) => (
                <div className='w-full py-10 md:grid md:grid-cols-2 md:gap-10 md:items-center md:even:justify-end md:even:text-end md:even:inline-flex' key={topClothe.id}>
                    <div className={ index %2 === 1 ? 'order-2' : ''}>
                        <img className='w-full' src={topClothe.image} alt={topClothe.altImage} />
                    </div>
                    <div>
                        <h3 className='uppercase text-2xl pt-3 lg:text-4xl'>{topClothe.category}</h3>
                        <h1 className='uppercase font-extrabold text-3xl pt-2 lg:text-5xl'>{topClothe.shirtName}</h1>
                        <p className='pt-4 font-light text-base md:pt-6 md:text-base lg:text-lg max-w-[450px]'>{topClothe.description}</p>
                        <h1 className='uppercase font-bold text-3xl pt-5 lg:text-4xl lg:pt-10'>{topClothe.prodPrice}</h1>
                        <div className={ index %2 ===1 ? 'inline-flex items-center gap-4 pt-5 lg:pt-10' : 'items-center gap-4 pt-5 lg:pt-10 flex'}>
                            <button className='p-3 px-6 rounded-full border-2 border-black cursor-pointer uppercase font-bold hover:bg-black hover:text-white transition-all'>Add To Cart</button>
                            <Icon className='cursor-pointer' icon="mdi:heart-outline" fontSize={34} />
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default TopClothList