import React from 'react'
import ArrivalsList from './ArrivalsList'
import useFetch from '../../hooks/useFetch'
import { Icon } from '@iconify/react';

const LatestArrivals = () => {

  const { data: newarrivals , error } = useFetch('http://localhost:8000/newarrivals')

  return (
    <>
        <div className='w-full py-10'>
            <div className='w-full m-auto max-w-[1280px] p-3'>
                <div className='md:flex md:justify-between'>
                    <h1 className='uppercase font-bold text-5xl'>Latest Arrival</h1>
                    <p className='text-base font-normal right-0 pt-4 md:pt-0 md:w-[300px] lg:w-[500px]'>Shop with confidence and find the perfect outfit that reflects your personality and boosts your confidence.</p>
                </div>
                  { error && <div>Error fetching data from database</div>}

              <div className='w-full pt-20'>
                <div className='relative flex items-center'>
                  <Icon className='left-0 z-10 absolute text-5xl' icon="ph:arrow-circle-left-fill" />
                    <div className='whitespace-nowrap overflow-x-scroll relative w-full scrollbar-hide'>
                      <ArrivalsList newarrivals={newarrivals} />
                    </div>
                  <Icon className='absolute right-0 z-10 text-5xl' icon="ph:arrow-circle-right-fill" />
                </div>
              </div>
            </div>

            
        </div>
    </>
  )
}

export default LatestArrivals