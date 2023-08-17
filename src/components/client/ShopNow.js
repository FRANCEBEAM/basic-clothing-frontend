import React from 'react'

const ShopNow = () => {
  return (
    <>
        <div className='w-full h-full pt-20 relative'>
            
            <div className='w-full h-[450px] flex flex-col justify-center items-center z-[15]'>
                <div className='w-full h-[450px] absolute bg-black opacity-60 z-10'></div>
                <img className='w-full h-[450px] absolute object-cover' src="./assets/shopnow-bg.jpg" alt="" />
                <h1 className='uppercase font-bold text-6xl text-center text-pink max-w-[600px] z-[20]'>
                    Shop now and Elevate your Style
                </h1>
                <div className='flex pt-10 gap-5 z-[20]'>
                    <button className='bg-white rounded-full p-2 px-7 uppercase font-bold text-black hover:bg-[#bebebe] transition-all ease-in-out duration-300'>Shop Now</button>
                    <button className='border-2 border-white rounded-full p-2 px-7 uppercase font-bold text-white hover:bg-pink hover:text-black transition-all ease-in-out duration-300'>Sign up</button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ShopNow