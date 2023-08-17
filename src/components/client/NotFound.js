import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className='w-full min-h-screen'>
            <div className='p-3 m-auto max-w-[1280px] py-36'>
                <div className='md:flex md:flex-grid items-center m-auto justify-center gap-20 max-w-[900px]'>
                    <img className='max-w-[400px] m-auto justify-center' src="./assets/404img.png" alt="" />
                    <div className='pt-10'>
                        <h1 className='uppercase font-bold text-black text-3xl'>Oops! Page Not Found</h1>
                        <p className='pt-6 text-[#525252]'>We're sorry, but the page you are looking for cannot be found. It may have been moved, renamed, or no longer exists.</p>
                        <div className='pt-10'>
                            <Link className="p-2 bg-black px-3 text-white uppercase text-sm" to="/">
                                Back to Homepage
                            </Link>
                        </div>
                        <p className='pt-10 text-[#525252] text-sm'>If you continue to experience issues or need further assistance, please contact our support team at <span className='text-black font-bold'>yotnek@gmail.com</span> for help.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default NotFound