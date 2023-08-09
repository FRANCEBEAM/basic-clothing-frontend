import React from 'react'
import { Link } from 'react-router-dom'

const ArrivalsList = ({newarrivals}) => {



  return (
    <>
        {
            newarrivals.map((arrival) => (
            <Link className='inline-block w-[500px] h-[300px] m-3 relative' key={arrival.id}>
              <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
                <img className='w-[100%] h-[100%] object-cover' src={arrival.bannerImg} alt="" />
                <div className='absolute bottom-0 left-0 p-6 text-white'>
                    <p className='uppercase text-lg font-normal text-[#F9CDCD]'>{arrival.bannerSub}</p>
                    <h1 className='font-bold text-3xl uppercase'>{arrival.bannerText}</h1>
                </div>
            </Link>
            ))
        }
    </>
  )
}

export default ArrivalsList