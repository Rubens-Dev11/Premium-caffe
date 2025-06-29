import React from 'react'
type Props={
    title:string;
    image:string;
    desc:string;
    alt: string;
}
import Image from 'next/image';

const ExploringCard = ({title, image, desc, alt}:Props) => {
  return (
    <div className='p-4 flex flex-col space-y-10 border-1 rounded-md border-t-white shadow-xl max-w-[300px] '>
        <div>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='text-gray-500 w-[75%] font-medium mt-1'>Lorem ipsum dolor sit amet dolor consecteur.</p>
        </div>
        
        <div className='flex items-center justify-center'>
            <Image src={image} alt={alt} width={200} height={200}/>
        </div>
        <div className='flex justify-center hover:scale-110 transition-all duration-300'>
            <h1 className=' w-fit cursor-pointer px-5 rounded-lg py-2 bg-black text-white '>
                {desc}
            </h1>
        </div>
      
    </div>
  )
}

export default ExploringCard
