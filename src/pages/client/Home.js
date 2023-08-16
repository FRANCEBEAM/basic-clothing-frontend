import React, { useEffect } from 'react'
import Hero from '../../components/client/Hero'
import TopCloth from '../../components/client/TopCloth'
import ShopList from '../../components/client/ShopList'
import Marquee from '../../components/client/Marquee'
import LatestArrivals from '../../components/client/LatestArrivals'
import Deals from '../../components/client/Deals'
import ShopNow from '../../components/client/ShopNow'
import Footer from '../../components/client/Footer'
import Aos from 'aos';
import "aos/dist/aos.css";



const Home = () => {

  useEffect(()=>{
    Aos.init({
        duration: 1000,
        once: true,
    });
  }, []);

  
  return (
    <>
      <Hero />
      <TopCloth />
      <ShopList />
      <Marquee />
      <LatestArrivals />
      <Deals />
      <ShopNow />
      <Footer />
    </>
  )
}

export default Home