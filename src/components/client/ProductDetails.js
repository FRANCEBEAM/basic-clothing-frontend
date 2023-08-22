import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const ProductDetails = () => {

  const { id } = useParams();
  const { data: products } = useFetch('https://francebeam.github.io/clotheapi/products.json');

  const selectedProducts = products.find(product => product.id === parseInt(id));

  if (!selectedProducts) {
    return null;
  }

  const { name, image, price} = selectedProducts


  return (

    <div>
      {
        products && ( 
          <div className='w-full h-full py-32 max-w-[1280px] m-auto z-50]'>
            <h1>Product Details</h1>
            <p>{price}</p>
            <div className=''>
              <div>
                <img src={image[0].src} alt={image[0].alt} />
              </div>
              <div>
              <h1 className='text-black text-2xl'>{name}</h1>
              </div>
            </div>
        </div>
         )
      }
    </div>

  );
}

export default ProductDetails;
