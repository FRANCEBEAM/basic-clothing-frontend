import React from 'react'

const Marquee = () => {
  return (
    <>
        <section className='py-10'>
            <div className="marquee bg-black p-5">
                <ul className="marquee__content uppercase text-4xl font-bold text-[#F9CDCD]">
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                </ul>

                <ul aria-hidden="true" className="marquee__content uppercase text-4xl font-bold text-[#F9CDCD]">
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                    <li>New Arrivals</li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Marquee