import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-gray-100'>
        <div data-aos="zoom-out" className='pt-16 pb-10 w-[85%] mx-auto'>
            <div className='flex items-center justify-between w-full max-sm:flex-col max-sm:space-y-4'>
                {/* logo */}
                <div>
                    <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
                </div>
                <div className='flex flex-col space-y-3'>
                    <p className='font-medium text-xl max-sm:text-sm '>Subscribe to our Newsletter</p>
                    <input type='email' placeholder='Theo@gmail.com' className='border border-gray-300 outline-none p-2 rounded-md focus:ring-2 focus:ring-gray-500 transition duration-200'/>
                </div>
                
            </div>
            <div className=' flex items-center justify-center mt-10 gap-3 font-medium'>
                <div className='flex flex-col  items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <p>Cafe Menu</p>
                        <p>About Us</p>
                        <p>Find Us</p>
                    </div>
                    <div>
                        
                        <p>Alowishus Catering</p>
                    </div>
                    
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
