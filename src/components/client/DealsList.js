import React from 'react'
import { Link } from 'react-router-dom'

const DealsList = ({deals}) => {
  return (
    <>
        {
            deals.map((deal) => {
                
                return (
                    <Link className='group relative w-full flex flex-row lg:first:h-[350px] lg:even:flex-initial lg:even:w-[49%] lg:last:flex-initial lg:last:w-[49%]' key={deal.id}>
                        <div className='w-full h-full bg-black opacity-40 absolute group-hover:opacity-10 transition-all ease-in-out duration-300 group-hover:bg-gradient-to-r group-hover:from-black'></div>
                        <img className='w-full h-full object-cover' src={deal.dealsImg} alt={deal.dealsAlt} />
     
                        <div className='absolute z-50 bottom-0 p-6'>
                            <h1 className='uppercase text-3xl font-bold text-white'>{deal.dealsText}</h1>
                        </div>
                    </Link>
                )
            })


        }
    </>
  )
}

export default DealsList