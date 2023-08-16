import React from 'react'
import { Icon } from '@iconify/react';

const Story = () => {
  return (
    <>
          <div className='w-full h-full m-auto max-w-[1280px] p-3'>
            <div className='w-auto sm:flex sm:gap-3 lg:w-full lg:gap-5'>
              <div>
                <h1 data-aos="fade-right" className='text-5xl lg:text-9xl font-bold uppercase'>The</h1>
              </div>
              <div className='w-full sm:ml-10 lg:ml-0 lg:text-center lg:justify-center'>
                <h1 data-aos="fade-up" className='pt-5 text-5xl lg:text-9xl font-bold lg:pt-[120px] lg:m-auto lg:text-center lg:pb-14'>STORY OF</h1> 
                <p className='pt-10 font-thin text-sm text-justify lg:w-[420px]'>At Basic, we believe that style starts with simplicity. We're an online clothing store that embraces the beauty of essential wardrobe pieces, offering timeless designs that effortlessly elevate your everyday look. Our mission is to provide high-quality clothing that combines comfort, versatility, and impeccable style. 
                </p>
                <img className='hidden pt-14 w-20 md:w-[450px] lg:block' src="../assets/casibestablish.jpg" alt="casib building" />
              </div>
              <div  className='w-full sm:ml-10 lg:ml-0'>
                <img className='hidden w-20 lg:w-[300px] lg:block' src="../assets/casibstore.jpg" alt="casib store" />
                <h1 data-aos="fade-left" className='text-5xl pt-10 lg:text-9xl font-bold lg:pt-[220px] lg:pb-14'>BASIC</h1>
                <p className='font-thin pt-10 text-sm text-justify lg:w-[320px]'>Founded with a passion for fashion and a commitment to simplicity, Basic emerged as a response to the overwhelming complexity of the fashion industry. We noticed a need for well-crafted, timeless pieces that form the foundation of a modern wardrobe. We set out on a journey to create a brand that celebrates simplicity and delivers accessible style to fashion enthusiasts worldwide.</p>
              </div>
            </div>

            <div className='border-1 border-t border-black max-w-[1280px] max-auto mt-[180px] flex pt-2'>
              <p className='text-black font-thin text-sm'>01</p>
              <p className='text-black font-thin text-sm ml-[100px] lg:ml-[350px]'>/02</p>
              <Icon fontSize={10} className='ml-auto' icon="material-symbols:circle" />
            </div>
            
            <div className='w-full h-full pt-32'>

              <div className='uppercase w-[100px] h-[100px] font-thin bg-pink rounded-full text-center m-auto items-center' >
                <h1 className='pt-10 font-normal text-black'>Values</h1>
              </div>

              <div className='w-auto md:flex text-center gap-14 m-auto pt-20 md:pt-36 justify-center'>
                <div className='pt-6'>
                  <Icon className='text-center m-auto' icon="tabler:shirt" fontSize={30} />
                  <h1 className='font-bold text-2xl text-black pt-3'>Simplicity</h1>
                  <p className='text-black lg:max-w-[350px] pt-6'>We celebrate the beauty of simplicity, offering essential pieces that form the building blocks of a versatile wardrobe.</p>
                </div>
                <div className='pt-6'>
                  <Icon className='text-center m-auto' icon="carbon:trophy" fontSize={30} />
                  <h1 className='font-bold text-2xl text-black pt-3'>Quality</h1>
                  <p className='text-black lg:max-w-[350px] pt-6'>We are dedicated to craftsmanship and attention to detail, ensuring that each garment is made with the highest quality materials and finishes.</p>
                </div>
                <div className='pt-6'>
                  <Icon className='text-center m-auto' icon="bx:leaf" fontSize={30} />
                  <h1 className='font-bold text-2xl text-black pt-3'>Sustainability</h1>
                  <p className='text-black lg:max-w-[350px] pt-6'>We are committed to minimizing our environmental impact. We prioritize eco-friendly practices, from sourcing sustainable materials to reducing waste throughout our production process.</p>
                </div>
              </div>
            </div>

            <div className='w-auto md:flex text-center pt-20 m-auto justify-center gap-14'>
                <div className='pt-6'>
                  <Icon className='text-center m-auto' icon="la:level-up-alt" fontSize={30} />
                  <h1 className='font-bold text-2xl text-black pt-3'>Empowerment</h1>
                  <p className='text-black lg:max-w-[350px] pt-6'>We believe that everyone should feel confident and empowered in their own style. Our clothing is designed to embrace individuality and inspire self-expression.</p>
                </div>
                <div className='pt-6'>
                  <Icon className='text-center m-auto' icon="iconamoon:smiling-face-light" fontSize={30} />
                  <h1 className='font-bold text-2xl text-black pt-3'>Customer Satisfaction</h1>
                  <p className='text-black lg:max-w-[350px] pt-6'>We value our customers and strive to provide exceptional service. Your satisfaction is our priority, and we are always here to assist you on your fashion journey.</p>
                </div>
            </div>

            <h1 className='py-[210px] text-center justify-center m-auto text-2xl max-w-[620px]'>
              Join us at Basic and discover the joy of uncomplicated style. Let's celebrate the beauty of simplicity together.
            </h1>  
          </div>
    </>
  )
}

export default Story