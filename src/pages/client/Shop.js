import React, { useState } from 'react'
// import ProductList from '../../components/client/ProductList'
// import useFetch from '../../hooks/useFetch'
// import { products } from '../../components/client/ContentTemplate'
import Footer from '../../components/client/Footer'
import ShopList from '../../components/client/ShopList'

const Shop = () => {
  
  // const { data: productList, error } = useFetch('http://localhost:8000/products')

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

export default Shop