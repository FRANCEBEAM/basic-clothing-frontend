import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ProductList = ({productList}) => {

    const removeUnderscores = (text) => {
        return text.replace(/_/g, ' ');
    }

    const truncate = (text, maxLength) => {
        if(text.length > maxLength) {
            return `${text.slice(0, maxLength)}...`
        }
        return text;
    }


  return (
    <>
        {
            productList.map((product) => (
                <Link className='m-auto justify-center flex-1' key={product.articleCode}>
                    <div className='w-full flex relative'>
                        <img className='w-full' src={product.image[0].src} alt={product.image[0].alt} />
                        <div className='absolute top-7 right-7'>
                            <Icon className='cursor-pointer block text-[34px]' icon="octicon:heart-24" />
                        </div>
                    </div>
                    <div className='pt-5'>
                        <p className='uppercase text-sm font-normal'>{truncate(removeUnderscores(product.category), 20)}</p>
                        <h1 className='text-lg font-bold'>{truncate(product.title, 24)}</h1>
                        <p className='text-base pt-3 font-normal'>{product.price}</p>
                    </div>
                </Link>
            ))
        }
    </>
  )
}

export default ProductList