import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import Footer from '../../components/client/Footer'

const Contact = () => {
  return (
    <>
        <div className='w-full h-full max-w-[1280px] py-20 m-auto'>
          <div className='p-3'>
            <h1 className='uppercase text-black text-lg pt-[160px] md:pt-[150px] max-w-[900px] text-center m-auto md:text-3xl'>
              We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. Our dedicated customer support team is here to assist you.
            </h1>

            <div className='my-32 m-auto relative'>
              <form className='max-w-[900px] m-auto'>
                  <div className='flex flex-col gap-7 lg:flex lg:flex-row lg:gap-20'>
                    <input className='bg-[#F9F9F9] text-black w-full p-4 border-b border-1 border-black max-w-[1500px]' placeholder='ENTER YOUR FULL NAME' />
                    <input className='bg-[#F9F9F9] text-black w-full p-4 border-b border-1 border-black max-w-[1500px]' placeholder='ENTER YOUR EMAIL' />
                  </div>
                  <div className='pt-12 lg:pt-20'>
                    <label className='uppercase text-black text-2xl'>your message:</label>
                    <textarea className='w-full h-[150px] p-3 font-thin bg-[#F9F9F9]' placeholder='We value your input and strive to provide exceptional customer service. Whether you have a question about product availability, sizing, or need assistance with an order, our team is ready to help. We aim to respond to all inquiries within 24 hours.'>
                    </textarea>
                  </div>
              </form>
              <ul className='hidden absolute lg:flex flex-col items-center top-0 right-0 gap-5'>
                <li>
                    <Link to='/'>
                        <Icon color='black' fontSize={24} icon="ic:baseline-facebook" />
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <Icon color='black' fontSize={24} icon="ri:instagram-fill" />
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <Icon color='black' fontSize={24} icon="ri:youtube-fill" />
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <Icon color='black' fontSize={24} icon="mdi:twitter" />
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact