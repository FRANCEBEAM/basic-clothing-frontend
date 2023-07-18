import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const EmailVerification = () => {
  return (
    <>
        <div className='w-full h-screen bg-[#FFFFFF] z-50'>
          <div className='w-[360px] bg-[#F4F4F4] drop-shadow-2xl absolute m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-10 py-10 text-center rounded-lg'>
            <form>
            <Icon className='justify-center flex text-center m-auto' icon="mdi:email-fast-outline" fontSize={54}/>
                <h1 className='text-2xl text-black font-bold pt-4'>Email Verification</h1>
                <p className='py-2 text-black'>We’ve sent a code to <span className='font-bold'>user@info.com</span></p>
                <div className='py-4'>
                  <input className='p-2 border-2 border-gray-500 px-14 rounded-md' type="number" />
                  <p className='py-4 text-black'>Didn't get a code? <span className='cursor-pointer font-bold'>Click to resend.</span></p>
                </div>
                <Link to='/verification-success'>
                  <button className='p-3 bg-[#000000] w-full text-white'>Verify</button>
                </Link>
            </form>
          </div>
        </div>
    </>
  )
}

export default EmailVerification