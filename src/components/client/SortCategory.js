import React from 'react'

const SortCategory = () => {
  return (
    <>
    <div className='flex items-center justify-between pt-10 gap-6'>
        <div className='gap-3 sm:hidden'>
          <label className='text-black uppercase text-sm'>Cloth Category: </label>
            <select className='p-1'>
              <option value="all">All</option>
              <option value="all">Men's</option>
              <option value="all">Women's</option>
              <option value="all">Kid's</option>
            </select>
        </div>
        <div className='hidden sm:flex gap-2'>
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