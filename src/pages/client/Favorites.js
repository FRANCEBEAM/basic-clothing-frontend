import React from 'react'
import { Icon } from '@iconify/react';
import FavoriteList from '../../components/client/FavoriteList';

const Favorites = () => {
  return (
    <>
      <div className='w-full h-full p-3 max-w-[1280px] m-auto'>
        <div className='pt-32 flex items-center gap-3'>
          <Icon icon="mdi:heart-outline" fontSize={20} />
          <h1 className='uppercase text-lg text-black'>Favorites:</h1>
        </div>
        <div className='pt-10 flex flex-wrap gap-5 m-auto'>
          <FavoriteList />
        </div>
      </div>
    </>
  )
}

export default Favorites