import React from 'react'
import { Link } from 'react-router-dom'

const VerificationSuccess = () => {
  return (
    <>
        <div className='w-full h-screen bg-[#FFFFFF] z-50'>
          <div className='w-[360px] bg-[#F4F4F4] drop-shadow-2xl absolute m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-10 py-10 text-center rounded-lg'>
            <form>
                <img className='w-14 text-center justify-center flex m-auto' src="/assets/party-popper.gif" alt="" />
                <h1 className='text-2xl text-black font-bold pt-4'>Email Verification Successful</h1>
                <p className='font-light text-black py-4'>
                Congratulations! Your email address has been successfully verified.
                </p>
                <p className='font-light text-black py-3 pb-5'>
                You can now enjoy the full benefits of being a member of Basic Online Store. Feel free to explore our latest collections, exclusive offers, and personalized recommendations.
                </p>
                <Link to='/signin'>
                  <button className='p-3 bg-[#000000] w-full text-white'>Sign in</button>
                </Link>
            </form>
          </div>
        </div>
    </>
  )
}

export default VerificationSuccess