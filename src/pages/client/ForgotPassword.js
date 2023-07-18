import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div>
        <div className='w-full h-screen bg-[#FFFFFF] z-50'>
          <div className='w-[360px] bg-[#F4F4F4] drop-shadow-2xl absolute m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-10 py-10 text-center rounded-lg'>
            <form>
            <Icon className='text-center m-auto' icon="streamline:interface-login-dial-pad-finger-password-dial-pad-dot-finger" fontSize={54} />
                <h1 className='text-2xl text-black font-bold pt-4'>Forgot Your Password?</h1>
                <p className='py-2 text-black font-light'>Please enter your email address associated with your Basic Online Store account below. We will send you a password reset link to regain access to your account.</p>
                <div className='py-7'>
                  <input className='p-2 border-2 border-gray-500 px-14 rounded-md' type="email" placeholder='Enter your Email Address'/>
                </div>
                <Link to='/password-reset'>
                  <button className='p-3 bg-[#000000] w-full text-white'>Reset</button>
                </Link>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword