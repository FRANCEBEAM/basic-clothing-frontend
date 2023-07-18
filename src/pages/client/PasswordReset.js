import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const PasswordReset = () => {
  return (
    <>
    <div>
        <div className='w-full h-screen bg-[#FFFFFF] z-50'>
          <div className='w-[360px] bg-[#F4F4F4] drop-shadow-2xl absolute m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-10 py-10 text-center rounded-lg'>
            <form>
            <Icon className='text-center m-auto' icon="mdi:password-reset" fontSize={54} />
                <h1 className='text-2xl text-black font-bold pt-4'>Password Reset</h1>
                <p className='py-3 pb-14 text-black font-light'>Your password has been reset successfully</p>
                <Link to='/signin'>
                  <button className='p-3 bg-[#000000] w-full text-white'>You can Sign in now</button>
                </Link>
            </form>
          </div>
        </div>
    </div>   
    </>
  )
}

export default PasswordReset