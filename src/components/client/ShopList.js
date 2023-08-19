import ProductList from './ProductList'
import SortCategory from './SortCategory'
// import { products } from './ContentTemplate'
import products from '../../data/products.json'
// import useFetch from '../../hooks/useFetch'

const ShopList = () => {

    // const { data: productList, error } = useFetch('/../../products.json')

    const handleMensCLick = () => {
        const mensProduct = products.filter(product => product.category === "Men's")
    }

  return (
    <>
        <div className='w-full h-full py-2 p-3'>
            <div className='max-w-[1280px] m-auto lg:p-0'>
                <h1 className='text-center uppercase max-w-[950px] m-auto text-3xl lg:text-5xl font-black lg:m-auto lg:justify-center'>Explore our curated collection of trendy and timeless clothing designed
                </h1>
                
                <SortCategory />

                <div className='w-full gap-9 pt-16 grid grid-cols-2 max-w-[1280px] m-auto justify-center md:grid-cols-3 lg:grid-cols-4'>
                   
                    <ProductList products={products}/> 
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default ShopList