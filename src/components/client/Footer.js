import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <>
        <footer className='w-full h-full bg-black'>
            <div className='m-auto max-w-[1280px] py-24 p-3'>
                <div className='flex flex-wrap justify-between'>

                    <ul className='w-full relative md:w-auto'>
                        <li className='pb-14'>
                            <Link className='' to='/'>
                                <img className='w-28 bg-no-repeat bg-center absolute' src="../assets/casibblack.png" alt="casib logo" />
                            </Link>
                        </li>
                        <li className='max-w-[350px] text-left'>
                            <p className='text-white text-sm font-thin'>
                                At Basic Online Store, we believe that fashion should be accessible, effortless, and timeless. Our mission is to provide high-quality clothing that combines style, comfort, and versatility, allowing you to express your unique personality through your wardrobe.
                            </p>
                            <p className='text-white text-sm font-thin pt-5'>
                                At Basic Online Store, we believe that fashion should be accessible, effortless, and timeless. Our mission is to provide high-quality clothing that combines style, comfort, and versatility, allowing you to express your unique personality through your wardrobe.
                            </p>
                        </li>
                    </ul>

                    <ul className='pt-7 text-white w-full md:w-auto md:pt-0'>
                        <li className='pb-5'>
                            <h1 className='uppercase text-white font-bold text-lg'>Helpful Links</h1>
                        </li>
                        <li className='font-thin py-2'>
                            <Link className='hover:text-[#c0c0c0] transition-all ease-in-out duration-700' to='/'>
                                Shop
                            </Link>
                        </li>
                        <li className='font-thin py-2'>
                            <Link className='hover:text-[#c0c0c0] transition-all ease-in-out duration-700' to='/'>
                                Sales
                            </Link>
                        </li>
                        <li className='font-thin py-2'>
                            <Link className='hover:text-[#c0c0c0] transition-all ease-in-out duration-700' to='/'>
                                About us
                            </Link>
                        </li>
                        <li className='font-thin py-2'>
                            <Link className='hover:text-[#c0c0c0] transition-all ease-in-out duration-700' to='/'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    <ul className='pt-7 text-white w-full md:w-auto md:pt-0'>
                        <li className='pb-5'>
                            <h1 className='uppercase text-white font-bold text-lg'>Customer Service</h1>
                        </li>
                        <li className='font-thin py-2'>
                            <Link className='hover:text-[#c0c0c0] transition-all ease-in-out duration-700' to='/'>
                                FAQ’s
                            </Link>
                        </li>
                        <li className='font-thin py-2'>
                            <Link className='hover:text-[#c0c0c0] transition-all ease-in-out duration-700' to='/'>
                                Terms & Conditions
                            </Link>
                        </li>
                        <li className='font-thin py-2'>
                            <Link className='hover:text-[#c0c0c0] transition-all ease-in-out duration-700' to='/'>
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>

                    <div className='pt-7 w-full md:w-auto md:pt-0'>
                        <div className='flex flex-row gap-2'>
                            <input className='p-1 border-2 border-white rounded-sm bg-transparent text-white' type="text" />
                            <button className='bg-white p-1 px-6 rounded-sm uppercase font-bold hover:bg-[#c0c0c0] transition-all ease-in-out duration-700'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='mt-20 border-t border-1 border-gray'>
                    <ul className='flex gap-3 pt-10 items-center'>
                        <li>
                            <Link to='/'>
                                <Icon color='white' fontSize={32} icon="ic:baseline-facebook" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <Icon color='white' fontSize={32} icon="ri:instagram-fill" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <Icon color='white' fontSize={32} icon="ri:youtube-fill" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <Icon color='white' fontSize={32} icon="mdi:twitter" />
                            </Link>
                        </li>
                    </ul>
                    <p className='text-white font-thin text-sm pt-5'>
                        COPYRIGHT © 2023 basic
                    </p>
                </div>

            </div>
        </footer>
    </>
  )
}

export default Footer