import React from 'react'
// import useFetch from '../../hooks/useFetch'
import Footer from '../../components/client/Footer'
// import { products } from '../../components/client/ContentTemplate'
import ShopList from '../../components/client/ShopList'

const Sales = () => {

  // const { data: productList ,error, isLoading } = useFetch('http://localhost:8000/products')

  return (
    <>
      <div className='w-full h-full'>
        <div className='w-full max-w-[1280px] m-auto py-28'>
          <ShopList />
        </div>
       <Footer />
      </div>
    </>
  )
}

export default Sales