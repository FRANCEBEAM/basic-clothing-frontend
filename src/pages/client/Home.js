import React from 'react'
import Hero from '../../components/client/Hero'
import TopCloth from '../../components/client/TopCloth'
import ShopList from '../../components/client/ShopList'
import Marquee from '../../components/client/Marquee'
import LatestArrivals from '../../components/client/LatestArrivals'



const Home = () => {
  return (
    <>
      <Hero />
      <TopCloth />
      <ShopList />
      <Marquee />
      <LatestArrivals />
    </>
  )
}

export default Home