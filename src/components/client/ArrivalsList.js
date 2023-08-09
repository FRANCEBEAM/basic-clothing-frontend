import React from 'react'
import { Link } from 'react-router-dom'

const ArrivalsList = ({newarrivals}) => {



  return (
    <>
        {
            newarrivals.map((arrival) => (
            <Link className='inline-block w-[500px] h-[300px] gap-x-10'>
                <img className='w-[100%] h-[100%] object-cover' src={arrival.bannerImg} alt="" />
                <div className=''>
                    <p className='uppercase text-base font-normal text-[#F9CDCD]'>{arrival.bannerSub}</p>
                    <h1 className='font-bold text-lg uppercase'>{arrival.bannerText}</h1>
                </div>
            </Link>
            ))
        }
    </>
  )
}

export default ArrivalsList