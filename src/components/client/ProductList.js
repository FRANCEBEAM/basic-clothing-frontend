import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ProductList = ({products , selectedCategory, loading}) => {


    const truncate = (text, maxLength) => {
        if(text.length > maxLength) {
            return `${text.slice(0, maxLength)}...`
        }
        return text;
    }

    const [hoveredStatesHeart, setHoveredStatesHeart] = useState(Array(products.length).fill(false));
    const [hoveredStatesImage, setHoveredStatesImage] = useState(Array(products.length).fill(false));

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

    //Add to favorite function
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const toggleFavorite = (productId) => {
        if (favoriteProducts.includes(productId)) {
            setFavoriteProducts(favoriteProducts.filter((id) => id !== productId))
        } else {
            setFavoriteProducts([...favoriteProducts, productId])
        }
    }


    const filteredProduct = selectedCategory === "All" ? products : products.filter(product => product.category === selectedCategory)


  return (
    <>
        {
          filteredProduct && filteredProduct.map((product, index) => { 
                const colors = Object.keys(product.colors).map((key) => product.colors[key])
                const extraColorsCount = colors.length - 3
                return (
                <div className='m-auto justify-center flex-1 py-6' key={product.id}>
                    <div className='relative top-5 right-3 z-50 block' 
                            onMouseEnter={() => handleHoverEnter(index)} 
                            onMouseLeave={() => handleHoverLeave(index)}
                            >
                        {hoveredStatesHeart[index] ? (
                            <div className='bg-gray-300 rounded-full p-2 absolute top-2 right-1 block'>
                                <Icon className='cursor-pointer block text-[30px] bg-none' icon="ph:heart-light" />
                            </div>
                        ) : (
                            <div className='p-2 absolute top-2 right-1 block'>
                                <Icon className='w-full cursor-pointer block text-[30px]' icon="ph:heart-light" />
                            </div>
                        )}
                    </div>
                    <Link className='w-full flex relative z-0' to={`/product-details/${product.id}`}>
                        <img className='w-full z-0' 
                            // src={product.image[0].src} 
                            src={hoveredStatesImage[index] ? product.image[0].dataAltImage : product.image[0].src }
                            dataaltimage={product.image[0].dataAltImage}
                            alt={product.image[0].alt} 
                            onMouseEnter={() => handleHoverImageEnter(index)}
                            onMouseLeave={() => handleHoverImageLeave(index)}
                            />
                        <div className='absolute left-4 top-7 bg-black p-1 px-3 text-white rounded-md'>
                            <p className='text-xs md:text-sm'>{product.arrival}</p>
                        </div>
                    </Link>
                    <div className='pt-5'>
                        <div className='w-full flex gap-4 items-center'>
                            {
                                
                            colors.slice(0, 3).map((color, index) => {
                                return (
                                <ul key={index}>
                                    <li>
                                        <Link to={color[`link${index + 1}`]}>
                                            <img className='max-w-[20px]' src={color.img} alt={color.dataAltColor} />
                                        </Link>
                                    </li>
                                </ul>
                                )
                            })
                        }
                        { extraColorsCount > 0 && <p className='text-sm text-black'>{`+ ${extraColorsCount}`}</p> }
                        </div>
                        <p className='uppercase text-sm font-normal line-clamp-1'>{product.category}</p>
                        <Link to='/'>
                            <h1 className='text-lg font-bold line-clamp-1'>{truncate(product.name, 34)}</h1>
                        </Link>
                        <p className='text-base pt-3 font-normal'>PHP {product.price}</p>
                    </div>
                </div>
            )})
            
        }
    </>
  )
}

export default ProductList