import React, { useState } from 'react';
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


    const [hoveredStatesHeart, setHoveredStatesHeart] = useState(Array(productList.length).fill(false));
    const [hoveredStatesImage, setHoveredStatesImage] = useState(Array(productList.length).fill(false));

    // Heart Icon

    const handleHoverEnter = (index) => {
        const updatedHoveredStates = [...hoveredStatesHeart];
        updatedHoveredStates[index] = true;
        setHoveredStatesHeart(updatedHoveredStates);
      };
      
      const handleHoverLeave = (index) => {
        const updatedHoveredStates = [...hoveredStatesHeart];
        updatedHoveredStates[index] = false;
        setHoveredStatesHeart(updatedHoveredStates);
      };

      // hover image

      const handleHoverImageEnter = (index) => {
        const newHoveredStates = [...hoveredStatesImage];
        newHoveredStates[index] = true;
        setHoveredStatesImage(newHoveredStates);
        };

      const handleHoverImageLeave = (index) => {
        const newHoveredStates = [...hoveredStatesImage];
        newHoveredStates[index] = false;
        setHoveredStatesImage(newHoveredStates);
    };

      

  return (
    <>
        {
            productList.map((product, index) => (
                <div className='m-auto justify-center flex-1 py-4' key={product.articleCode}>
                    <Link className='w-full flex relative' to='/'>
                        <img className='w-full' 
                            // src={product.image[0].src} 
                            src={hoveredStatesImage[index] ? product.image[0].dataAltImage : product.image[0].src }
                            dataaltimage={product.image[0].dataAltImage}
                            alt={product.image[0].alt} 
                            onMouseEnter={() => handleHoverImageEnter(index)}
                            onMouseLeave={() => handleHoverImageLeave(index)}
                            />
                        <div className='absolute top-7 right-4' 
                            onMouseEnter={() => handleHoverEnter(index)} 
                            onMouseLeave={() => handleHoverLeave(index)}>
                        {hoveredStatesHeart[index] ? (
                            <Icon className='cursor-pointer block text-[34px] text-red-500 bg-none' icon="ph:heart-fill" />
                        ) : (
                            <Icon className='cursor-pointer block text-[34px]' icon="ph:heart-light" />
                        )}
                        </div>
                        <div className='absolute left-4 top-7 bg-black p-1 px-3 text-white rounded-md'>
                            <p className='text-xs md:text-sm'>{product.sellingAttribute}</p>
                        </div>
                    </Link>
                    <div className='pt-5'>
                        <p className='uppercase text-sm font-normal line-clamp-1'>{truncate(removeUnderscores(product.category), 34)}</p>
                        <Link to='/'>
                            <h1 className='text-lg font-bold line-clamp-1'>{truncate(product.title, 34)}</h1>
                        </Link>
                        <p className='text-base pt-3 font-normal'>{product.price}</p>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default ProductList