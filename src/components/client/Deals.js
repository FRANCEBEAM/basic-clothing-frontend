import React from 'react'
import DealsList from './DealsList'
import useFetch from '../../hooks/useFetch'

const Deals = () => {

    const { data: dealsList, error, } = useFetch('http://localhost:8000/deals')

  return (
    <>
        <div className='w-full p-3 m-auto py-10 lg:max-w-[1280px]'>
            <div className='text-center'>
                <h1 className='uppercase text-4xl font-bold text-black md:text-5xl'>Deals and Limited-Time Offers</h1>
                <p className='text-base font-normal text-black pt-7 max-w-[470px] m-auto justify-center'>Discover amazing discounts on our premium clothing collection. Don't miss out on the opportunity to upgrade your wardrobe with high-quality fashion at unbeatable prices.</p>
            </div>
            <div className='w-full h-full pt-20 flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:gap-y-4 lg:gap-x-4 lg:justify-center'>
                { dealsList && <DealsList dealsList={dealsList} /> }
            </div>
        </div>
    </>
  )
}

export default Deals