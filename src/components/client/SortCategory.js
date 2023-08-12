import React from 'react'

const SortCategory = () => {
  return (
    <>
    <div className='flex items-center justify-between pt-10 gap-6'>
        <div className='flex gap-2'>
            <button className='p-1 px-3 border-2 border-black rounded-xl'>All</button>
            <button className='p-1 px-3 border-2 border-black rounded-xl'>Men's</button>
            <button className='p-1 px-3 border-2 border-black rounded-xl'>Women's</button>
            <button className='p-1 px-3 border-2 border-black rounded-xl'>Kid's</button>
        </div>
        <div>
            <input className='border-2 p-1 px-3 rounded-lg border-black' type="text" name="" id="" placeholder='Search your outfit' />
        </div>
    </div>
    </>
  )
}

export default SortCategory