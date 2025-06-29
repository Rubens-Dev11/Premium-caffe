import React from 'react'
import Image from 'next/image'
import BoxText from '@/Components/Helper/BoxText'
import Boxtwhite from '@/Components/Helper/Boxtwhite'
const Hero = () => {
  return (
    <div className='pt-14 pb-14 w-[85%]  mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        {/* text content */}
        <div>
          <div className=''>
            <h1 data-aos="fade-right" className='text-8xl font-bold max-sm:text-6xl'>Alowishus </h1>
            <h1 data-aos="fade-right" className='text-8xl font-bold max-sm:text-6xl'>Deliciious </h1>
            <span data-aos="fade-right" className='flex flex-row gap-12 items-center'>
              <h1 data-aos="fade-right"  className='text-8xl font-bold max-sm:text-6xl'>Coffee </h1>
              <div data-aos="fade-left"><Image  src="/images/cafe.png" alt="cafe" width={100} height={100} className=''/></div>
            </span>
            <p data-aos="fade-right" className='text-sm mt-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quae placeat. Corrupti, omnis id a consequatur eius saepe quia dignissimos.</p>
            <div data-aos="fade-right"  className='flex gap-5 items-center py-10'>
             <BoxText>Download App</BoxText>
             <div className=''>
               <Boxtwhite>Shop Coffee</Boxtwhite>
             </div>
            
            </div>
          </div>
        </div>
        {/* image Content */}
        <div data-aos="fade-left" className=''>
          <Image src="/images/hero1.png" alt="hero" width={600} height={600} className='flex max-md:items-center'/>
        </div>
        

      </div>
    </div>
  )
}

export default Hero
