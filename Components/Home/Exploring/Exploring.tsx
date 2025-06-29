import React from 'react'
import ExploringCard from './ExploringCard'

const Exploring = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center max-sm:text-3xl text-4xl font-bold'>Explore Our Alowishus</h1>
        <p className='text-center mx-auto w-[80%] sm:w-[60%] text-gray-500 font-medium lg:w-[50%] mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid cum impedit quas facere voluptate?</p>
        <div className='w-[85%] mx-auto mt-24 flex justify-center items-center   '>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {/* Section1 */}
                <div data-aos="fade-left">
                    <ExploringCard title="Our Catering"
                       image="/images/icon1.png"
                       desc="Order Cathering"
                       alt="Ustensil"
                    />
                </div>
                {/* Section2 */}
                <div data-aos="fade-left">
                    <ExploringCard title="The Food"
                       image="/images/icon2.png"
                       desc="Food Menu"
                       alt="Food"
                    />
                </div>
                {/* Section3 */}
                <div data-aos="fade-left">
                    <ExploringCard title="The Getato"
                       image="/images/icon3.png"
                       desc="Discover More"
                       alt="Ice"
                    />
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Exploring
