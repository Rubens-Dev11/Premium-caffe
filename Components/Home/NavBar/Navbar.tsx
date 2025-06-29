'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { NavLinks } from '@/Constant/Constant'
import Link from 'next/link'
import { HiShoppingBag } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [mobileopen, SetMobileOpen] = useState(false)
  const ToggleNav = ()=>{
    SetMobileOpen(!mobileopen)
  }
  return (
    <div className=' backdrop-blur-lg top-0 z-50  sticky'>
    <div className='w-[90%] xl:[80%]   mx-auto p-8 '>
      <div  className='flex justify-between items-center'>
        {/* logo */}
        <div>
          <Image src="/images/logo.png" alt='logo' width={100} height={100}/>
        </div>
        <div data-aos="fade-left" className='flex  gap-10 items-center font-medium   '>
          {NavLinks.map((link)=>{
            return(
              <Link href={link.url} key={link.id} className='hidden lg:block'>
                <p className=''>{link.title}</p>
              </Link>
            )
          })}
        </div>
        <div className='flex gap-3 items-center  '>
          <div className='rounded-full p-1 bg-white items-center justify-center '>
            <HiShoppingBag className=''/>
          </div>
          <button className='bg-black hidden lg:block flex-none  text-white text-xs p-3 rounded-lg hover:scale-110 transition-all duration-300 '>
            Buy Gift vouchers

          </button>
        </div>
        {/* mobile menu */}
        <div className='lg:hidden max-lg:block absolute top-10 right-4 '>
          <button onClick={ToggleNav}>
            {mobileopen? <IoClose className='text-2xl'/>:<HiBars3 className='text-2xl' />  }
          </button>
          {mobileopen && (
            <div className='fixed right-0 border space-y-3 top-16 z-20 bg-gray-200 mt-2  p-12 flex flex-col items-center justify-center w-full'>
              {NavLinks.map((link)=>{
            return(
              <Link href={link.url} key={link.id} className=''>
                <p className=''>{link.title}</p>
                
              </Link>
              
            )
            })}


            </div>
          )}
          <div>
            
          </div>


      </div>

      </div>
      
      
    </div>

    </div>

  )
}

export default Navbar
