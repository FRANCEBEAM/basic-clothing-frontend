import ProductList from './ProductList'
import useFetch from '../../hooks/useFetch'

const ShopList = () => {

    const { data: productList, error } = useFetch('http://localhost:8000/products')


  return (
    <>
        <div className='w-full h-full py-2 p-3'>
            <div className='max-w-[1280px] m-auto lg:p-0'>
                <h1 className='text-center uppercase w-[460px] m-auto text-3xl lg:text-5xl font-black lg:m-auto lg:justify-center lg:w-[950px]'>Explore our curated collection of trendy and timeless clothing designed
                </h1>
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

                <div className='w-full gap-9 pt-16 grid grid-cols-2 max-w-[1280px] m-auto justify-center md:grid-cols-3 lg:grid-cols-4'>
                    {error && <div>Error fetching data from database </div>}
                    <ProductList productList={productList}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShopList