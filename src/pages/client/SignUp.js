import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className='lg:w-full'>
        <div className=' lg:w-full z-50 lg:grid lg:grid-cols-2'>

          <div>
              <img className='hidden lg:block bg-gradient-to-r from-[#000000] left-0 flex-1' src="assets/dress-img.jpg" alt="" />
          </div>

          <div className='w-[470px] p-4 pt-24 lg:w-[580px] lg:justify-center m-auto lg:m-0 lg:ml-10 lg:top-16 z-50'>
            <form>
              <h1 className='text-black text-2xl font-bold'>Get started</h1>
              <p className='text-black text-base font-light py-5'>Sign up today to stay updated on the latest fashion trends, receive personalized recommendations, and enjoy special promotions.</p>
              <div className='flex flex-col py-1'>
                <label className='text-black font-bold py-2'>Full Name</label>
                <input className='p-2 border-gray-400 border-solid border-2 rounded-md' type="text" placeholder='Enter your full name'/>
              </div>
              <div className='flex flex-col py-1'>
                <label className='text-black font-bold py-2'>Email</label>
                <input className='p-2 border-gray-400 border-solid border-2 rounded-md' type="email" placeholder='Enter your full name'/>
              </div>
              <div className='flex flex-col py-1'>
                <label className='text-black font-bold py-2'>Password</label>
                <input className='p-2 border-gray-400 border-solid border-2 rounded-md' type="password" placeholder='Enter your full name'/>
              </div>
              <div className='flex flex-col py-1'>
                <label className='text-black font-bold py-2'>Confirm Password</label>
                <input className='p-2 border-gray-400 border-solid border-2 rounded-md' type="password" placeholder='Enter your full name'/>
              </div>
              <div className='flex flex-col py-1'>
                <label className='text-black font-bold py-2'>Contact Number</label>
                <input className='p-2 border-gray-400 border-solid border-2 rounded-md' type="number" placeholder='Enter your full name'/>
              </div>
                
              <Link to='/email-verification' >
                <button className='mt-10 bg-[#000000] hover:bg-black p-4 px-10 font-bold w-full text-white'>
                  Sign up
                </button>
              </Link>
              <p className='py-10 text-sm text-black lg:text-center'>Already have account? <Link to='/signin' className='font-bold text-black' >Sign in here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp