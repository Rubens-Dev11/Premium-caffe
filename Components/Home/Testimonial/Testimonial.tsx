"use client"
import React from 'react'
import Image from 'next/image'
import { FaRegStar } from "react-icons/fa";
import Slider from 'react-slick';
import { Data } from '@/Constant/Constant';
const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


  return (
    <div className='pt-16 pb-1'>
      <h1 className='text-center text-4xl font-bold max-sm:text-3xl'>Client Testimonial</h1>
      <p className='text-center w-[30%] max-sm:w-[85%] mx-auto text-sm mt-3 text-gray-500'>lorem ipsum dolor sit amet consecteur adipiscing elit. Minus optio quisquam dicta maxime, perferendis veniam!</p>
      <div className='mt-6 flex  items-center max-sm:flex-col justify-center gap-6'>
        {/* profile content */}
        <div className='flex items-center justify-center -space-x-3'>
          <Image src="/images/user4.jpg" alt="client" width={40} height={40} className='rounded-full border-2 border-white'/>
          <Image src="/images/user5.jpg" alt="client" width={40} height={40} className='rounded-full border-2 border-white'/>
          <Image src="/images/user6.jpg" alt="client" width={40} height={40} className='rounded-full border-2 border-white'/>
          <Image src="/images/user1.jpeg" alt="client" width={40} height={40} className='rounded-full border-2 border-white'/>
          <Image src="/images/maire.jpg" alt="client" width={40} height={40} className='rounded-full border-2 border-white'/>
          <Image src="/images/pr.jpg" alt="client" width={40} height={40} className='rounded-full border-2 border-white'/>
        </div>
        <div className='border-black border-l-2 px-6 flex flex-col'>
          <div className='flex flex-row items-center gap-1'>
            <h1 className='text-2xl font-bold'>4.6</h1>
            <FaRegStar className='text-yellow-400'/>
          </div>
          <p className='font-medium'>Rated by 25k on google.</p>
          
        </div>
      </div>
      <div className='pt-20 pb-20 w-[85%] mx-auto  '>
          <div className="gap-5 mx-auto w-[85%]  ">
          <Slider {...settings}>
          {Data.map((data)=>(
            <div data-aos="zoom-in" key={data.id} className='overflow-hidden'>
              {/* image */}
              <div className='relative w-[300px] h-[300px] '>
                <Image src={data.image} alt="user" fill className='object-cover rounded-md'/>
              </div>
              <div className='flex-col flex p-4 border rounded-lg w-[300px]  shadow-md mb-2  '>
                <div className='flex flex-row items-center gap-5 mt-5 mb-5'>
                  <h1 className=' font-bold'>{data.tilte}</h1>
                  <div className='flex items-center space-x-1'>
                    <FaRegStar className='text-yellow-400'/>
                    <FaRegStar className='text-yellow-400'/>
                    <FaRegStar className='text-yellow-400'/>
                    <FaRegStar className='text-yellow-400'/>
                    <FaRegStar className='text-yellow-400'/>
                  </div>
                </div>
                <div>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam magnam aliquam nulla amet maiores accusantium voluptatum, explicabo, odit vel nemo voluptates et quod praesentium.</p>
              </div>
              </div>
              
              
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  )
}

export default Testimonial
