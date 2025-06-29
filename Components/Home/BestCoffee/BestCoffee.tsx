import React from 'react'
import Image from 'next/image'

const BestCoffee = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='mt-8'>
        <h1 className='text-center text-4xl max-sm:text-3xl font-bold'>
          Best Selling Coffee
        </h1>
        <p className='w-[80%] text-center md:w-[40%] mx-auto mt-3 text-sm text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
          quisquam dicta maxime, perferendis veniam!
        </p>

        <div className='w-[85%] mx-auto flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24'>

            {/* First Box */}
            <div data-aos="fade-up" className='relative bg-white p-6 rounded-xl shadow-lg w-72 mx-auto mt-28'>
              {/* Image flottante */}
              <div className='absolute -top-16 left-1/2 -translate-x-1/2'>
                <Image
                  src="/images/mid2.png"
                  alt="mid1"
                  width={200}
                  height={150}
                  className="drop-shadow-lg"
                />
              </div>

              <p className='text-gray-500 text-sm mt-12'>#1 Selling</p>

              <h2 className='text-2xl font-bold text-gray-800 mt-2'>
                Double <br /> Espresso
              </h2>

              <p className='text-gray-500 text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
              </p>

              <div className='flex items-center justify-between mt-4'>
                <span className='text-lg font-semibold text-gray-900'>
                  $ 59.99
                </span>
                <button className='bg-black text-white px-4 py-2 rounded'>
                  Order Now
                </button>
              </div>
            </div>
            {/* 2nde Box */}
            <div data-aos="fade-up" className='relative bg-white p-6 rounded-xl shadow-lg w-72 mx-auto mt-16'>
              {/* Image flottante */}
              <div className='absolute -top-16 left-1/2 -translate-x-1/2'>
                <Image
                  src="/images/mid2.png"
                  alt="mid1"
                  width={200}
                  height={150}
                  className="drop-shadow-lg"
                />
              </div>

              <p className='text-gray-500 text-sm mt-12'>#1 Selling</p>

              <h2 className='text-2xl font-bold text-gray-800 mt-2'>
                Double <br /> Espresso
              </h2>

              <p className='text-gray-500 text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
              </p>

              <div className='flex items-center justify-between mt-4'>
                <span className='text-lg font-semibold text-gray-900'>
                  $ 59.99
                </span>
                <button className='bg-black text-white px-4 py-2 rounded'>
                  Order Now
                </button>
              </div>
            </div>
            {/* 3rd Box */}
            <div data-aos="fade-left"  className='relative bg-white p-6 rounded-xl shadow-lg w-72 mx-auto mt-28'>
              {/* Image flottante */}
              <div className='absolute -top-16 left-1/2 -translate-x-1/2'>
                <Image
                  src="/images/mid3.png"
                  alt="mid1"
                  width={200}
                  height={150}
                  className="drop-shadow-lg"
                />
              </div>

              <p className='text-gray-500 text-sm mt-12'>#1 Selling</p>

              <h2 className='text-2xl font-bold text-gray-800 mt-2'>
                Double <br /> Espresso
              </h2>

              <p className='text-gray-500 text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
              </p>

              <div className='flex items-center justify-between mt-4'>
                <span className='text-lg font-semibold text-gray-900'>
                  $ 59.99
                </span>
                <button className='bg-black text-white px-4 py-2 rounded'>
                  Order Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BestCoffee
