import React from 'react'
import { Icon } from '@iconify/react';

const Cart = () => {
  return (
    <>
      <div className='w-full h-full p-3 max-w-[1280px] m-auto'>
        <div className='py-32 flex items-center gap-3'>
        <Icon icon="uil:cart" fontSize={20} />
          <h1 className='uppercase text-lg text-black'>Cart:</h1>
        </div>
      </div>
    </>
  )
}

export default Cart