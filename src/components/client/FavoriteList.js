import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import favoriteProd from '../../data/favoriteProd.json'

const FavoriteList = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites)
    }, [])

    const toggleFavorite = (productId) => {
        const updatedFavorites = favorites.includes(productId)
          ? favorites.filter((id) => id !== productId)
          : [...favorites, productId];
    
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      };

  return (
    <>
        {
         favoriteProd.map((favorite) => (
            <div className='w-full relative py-7 md:max-w-[297px]' key={favorite.id}>
                <div>
                    <img className='' src={favorite.image[0].src} alt="" />
                </div>
                <div className='pt-3'>
                    <h1 className='text-black text-2xl'>{favorite.name}</h1>
                    <p className='text-black text-md'>PHP{favorite.price}</p>
                    <p className='text-black/80 text-sm'>{favorite.arrival}</p>
                    <p className='text-black/80 text-sm'>Color: <span>{favorite.colors}</span></p>
                    <div className='flex flex-col gap-y-3 py-4'>
                        <select className='p-2 border-black/30 border-2 md:w-[297px] rounded-sm uppercase text-sm' name="" id="">
                            <option>Select Size</option>
                            <option value="">XSM</option>
                            <option value="">SM</option>
                            <option value="">M</option>
                            <option value="">L</option>
                        </select>
                        <button className='p-2 bg-black text-white md:w-[297px] rounded-sm uppercase flex gap-2 items-center justify-center hover:bg-black/90'><Icon icon="uil:cart" /> Add to Cart</button>
                    </div>
                </div>
            </div>
            ))
        }
    </>
  )
}

export default FavoriteList