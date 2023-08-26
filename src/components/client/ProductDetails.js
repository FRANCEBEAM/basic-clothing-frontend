import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Icon } from '@iconify/react';

const ProductDetails = () => {

  const { id } = useParams();
  const { data: products } = useFetch('https://francebeam.github.io/clotheapi/products.json');

  const selectedProducts = products.find(product => product.id === parseInt(id));

  // product details toggle
  const [toggleDetails, setToggleDetails] = useState(false)

  const handleToggleDetails = () => setToggleDetails(!toggleDetails)

  if (!selectedProducts) {
    return null;
  }

  const { name, category, image, price, size, colors, description } = selectedProducts



  return (

    <div>
      {
        products && (
          <div className='w-full h-full py-32 p-3 max-w-[1280px] m-auto z-50]'>
            <div className='sm:grid sm:grid-cols-2 sm:items-center sm:gap-10'>
              <div className=''>
                <img className='w-full' src={image[0].src} draggable={false} alt={image[0].alt} />
              </div>
              <div className='py-5'>
                <p className='text-gray-500 pt-5 md:text-lg'>{category}</p>
                <h1 className='text-black text-2xl font-black md:text-3xl'>{name}</h1>
                <p className='text-black py-3 md:text-lg'>PHP {price}</p>
                <div className='z-50 flex gap-2 py-4 flex-wrap w-full'>
                <div className='flex gap-3 w-full flex-wrap'>
                  {
                    colors.map((color) => (
                      <img key={color.id} className='w-20' src={color.img} alt="" />
                      ))
                  }
                </div>
                  <button className='mt-3 p-2 border-[1px] border-black/70 px-5 rounded-md text-xs'>XS: <span className='text-black font-bold'>{size[0].xsmall}</span></button>
                  <button className='mt-3 p-2 border-[1px] border-black/70 px-5 rounded-md text-xs'>S: <span className='text-black font-bold'>{size[1].small}</span></button>
                  <button className='mt-3 p-2 border-[1px] border-black/70 px-5 rounded-md text-xs'>M: <span className='text-black font-bold'>{size[2].medium}</span></button>
                  <button className='mt-3 p-2 border-[1px] border-black/70 px-5 rounded-md text-xs'>L: <span className='text-black font-bold'>{size[3].large}</span></button>
                  <button className='mt-3 p-2 border-[1px] border-black/70 px-5 rounded-md text-xs'>XL: <span className='text-black font-bold'>{size[4].xlarge}</span></button>
                  <button className='mt-3 p-2 border-[1px] border-black/70 px-5 rounded-md text-xs'>XXL: <span className='text-black font-bold'>{size[5].xxlarge}</span></button>
                </div>
                <div className='py-10 flex flex-col gap-y-4'>
                  <button className='p-3 border-[1px] border-black w-full text-black uppercase font-bold hover:bg-black/10 rounded-md'>Add to Favorite</button>
                  <button className='p-3 bg-black w-full text-white uppercase font-bold hover:bg-black/90 rounded-md'>Add to Cart</button>
                <div className='py-10 md:py-0'>
                  <div className='inline-flex items-center gap-2 cursor-pointer text-black uppercase' onClick={handleToggleDetails}>
                    Product Details
                  { toggleDetails ? <Icon icon="raphael:arrowup" /> : <Icon icon="raphael:arrowdown" /> }
                  </div>
                  <p className={`text-black font-light py-3 ${toggleDetails ? 'block' : 'hidden'}`}>{description}</p>
                </div>
                </div>
              </div>
            </div>
        </div>
         )
      }
    </div>

  );
}

export default ProductDetails;
