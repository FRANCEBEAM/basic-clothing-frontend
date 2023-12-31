import React, { useRef, useEffect } from 'react'
import ArrivalsList from './ArrivalsList'
// import useFetch from '../../hooks/useFetch'
import { Icon } from '@iconify/react';
import { newarrivals } from './ContentTemplate';

const LatestArrivals = () => {


  // const { data: newarrivals , error } = useFetch('')

  const sliderRef = useRef(null);

  const handleSlideLeft = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -1000,
        behavior: 'smooth',
      });
    }
  }

  const handleSlideRight = (sliderRef) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 1000,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
        <div className='w-full py-10'>
            <div className='w-full m-auto max-w-[1280px] p-3'>
                <div className='md:flex md:justify-between'>
                    <h1 data-aos="fade-right" data-aos-easing="ease-in-sine" className='uppercase font-bold text-5xl text-black'>Latest Arrival</h1>
                    <p className='text-base text-black font-normal right-0 pt-4 md:pt-0 md:w-[300px] lg:w-[500px]'>Shop with confidence and find the perfect outfit that reflects your personality and boosts your confidence.</p>
                </div>

                  {/* { error && <div>Error fetching data from database</div>} */}

              <div className='w-full pt-20'>
                <div className='relative flex items-center'>
                  <Icon color='white' onClick={() => handleSlideLeft(sliderRef)} className='cursor-pointer left-0 z-10 absolute text-5xl' icon="ph:arrow-circle-left-fill" />
                    <div className='whitespace-nowrap overflow-x-scroll relative w-full scrollbar-hide' ref={sliderRef}>
                      {/* { newarrivals && <ArrivalsList newarrivals={newarrivals} />}  */}
                      <ArrivalsList newarrivals={newarrivals} />
                    </div>
                  <Icon color='white' onClick={() => handleSlideRight(sliderRef)} className='cursor-pointer absolute right-0 z-10 text-5xl' icon="ph:arrow-circle-right-fill" />
                </div>
              </div>
            </div>

            
        </div>
    </>
  )
}

export default LatestArrivals