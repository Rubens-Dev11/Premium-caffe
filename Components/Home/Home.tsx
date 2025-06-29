"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Exploring from './Exploring/Exploring'
import Order from './Order/Order'
import BestCoffee from './BestCoffee/BestCoffee'
import Moment from './Moment/Moment'
import Testimonial from './Testimonial/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
    const initAos = async () => {
      await import ("aos");
      AOS.init({
        duration:1000,
        easing: "ease",
        once:true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  })
  return (
    <div>
      <div className='bg-gray-100'>
        <Hero/>
      </div>
      <Exploring/>
      <Order/>
      <BestCoffee/>
      <Moment/>
      <Testimonial/>
      
    </div>
  )
}

export default Home
