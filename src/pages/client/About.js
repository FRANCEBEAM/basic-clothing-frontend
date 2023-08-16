import React from 'react'
import { Icon } from '@iconify/react';
import Story from '../../components/client/Story.js'
import Footer from '../../components/client/Footer.js'

const About = () => {
  return (
    <>
        <div className='w-full h-full z-50 pt-36'>
          <Story />
          <Footer />
        </div>
    </>
  )
}

export default About