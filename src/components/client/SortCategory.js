import React from 'react'

const SortCategory = ({selectedCategory, handleCategorySelect}) => {
  return (
    <>
    <div className='flex items-center justify-between pt-14 gap-6'>
        <div className='gap-3 sm:hidden'>
          <label 
            className='text-black uppercase text-sm'
            htmlFor='categorySelect' >Cloth Category: </label>
            <select 
              className='p-1'
              id='categorySelect'
              value={selectedCategory}
              onChange={handleCategorySelect}
              >
              <option value="All">All</option>
              <option value="Men's">Men's</option>
              <option value="Women's">Women's</option>
              <option value="Kid's">Kid's</option>
            </select>
        </div>
        <div className='hidden sm:flex gap-2'>
            <button
              onClick={() => handleCategorySelect({ target: { value: 'All' } })}
              className={`p-1 px-3 border-2 rounded-md ${selectedCategory === 'All' ? 'bg-black text-white' : 'border-gray-300'}`}
              >All
            </button>
            <button 
              onClick={() => handleCategorySelect({ target: { value: "Men's" } })}
              className={`p-1 px-3 border-2 rounded-md ${ selectedCategory === "Men's" ? 'bg-black text-white' : 'border-gray-300'
              }`}>Men's</button>
            <button 
              className={`p-1 px-3 border-2 rounded-md ${ selectedCategory === "Women's" ? 'bg-black text-white' : 'border-gray-300' }`}
              onClick={() => handleCategorySelect({ target: { value: "Women's" } })} >Women's</button>
            <button 
              className={`p-1 px-3 border-2 border-black rounded-md ${ selectedCategory === "Kid's" ? 'bg-black text-white' : 'border-gray-300'}`}
              onClick={() => handleCategorySelect({ target: { value: "Kid's" } })} >Kid's</button>
        </div>
        <div>
            <input className='border-2 p-1 px-3 rounded-md border-gray-300' type="text" name="" id="" placeholder='Search your outfit' />
        </div>
    </div>
    
    </>
  )
}

export default SortCategory