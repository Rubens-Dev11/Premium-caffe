import React from 'react'
import Image from 'next/image'


const Order = () => {
  return (
    <div className='bg-gray-100 '>
        <div className='pt-16 pb-16 w-[85%] mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* image section */}
            <div data-aos="fade-up">
                <Image src="/images/coffee-mid.png" alt="300" width={600} height={600}/>
            </div>
            <div data-aos="fade-down" className='flex  items-start flex-col justify-center'>
                    
                    <h1 className='text-5xl max-sm:text-3xl font-bold'>Order Your </h1>
                    <h1 className='text-5xl max-sm:text-3xl font-bold'>Favorite Coffee</h1>
                    <p className='mt-8 mb-8 text-gray-500 w-[70%] max-sm:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis autem illum neque delectus iusto, dolore aut ipsam dolorem dolores impedit facilis reprehenderit eligendi ratione?</p>
                    <div className='transition-all duration-300 hover:scale-110'>
                        <h1 className=' cursor-pointer px-5 rounded-lg py-2 bg-black text-white '>
                            Order Now
                        </h1>
                    </div>
                   
                    
                
                
            </div>

        </div>

        </div>
        
      
    </div>
  )
}

export default Order
