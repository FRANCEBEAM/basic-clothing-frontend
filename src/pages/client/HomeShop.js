import React from 'react'
import ShopList from '../../components/client/ShopList'

const HomeShop = () => {
  return (
    <>
        <div className='w-full h-full py-2 p-3'>
            <div className='max-w-[1280px] m-auto lg:p-0'>
                <h1 className='text-center uppercase max-w-[950px] m-auto text-3xl lg:text-5xl font-black lg:m-auto lg:justify-center'>Explore our curated collection of trendy and timeless clothing designed
                </h1>

                <ShopList />

            </div>
        </div>  
    </>
  )
}

export default HomeShop