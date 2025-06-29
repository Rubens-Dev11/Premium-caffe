import BoxText from '@/Components/Helper/BoxText'
import React from 'react'
import Image from 'next/image'

const Moment = () => {
  return (
	<div className='bg-gray-100'>
		<div className=' mx-auto w-[70%] flex justify-center items-center '>
			<div className='grid grid-cols-1 lg:grid-cols-2 pt-16 pb-16 gap-28  '>
				{/* text Content */}
				<div data-aos="fade-up" className='flex items-center justify-center'>
					<div>
					   <h1 className='text-4xl font-bold max-sm:text-3xl'>Instant Coffee At<br/>  Your Home</h1> 
					   <p className='w-[85%] mt-5 text-sm text-gray-500 max-sm:w-full '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto minima expedita sit sed, modi numquam eligendi repellat error est fugit, reiciendis, quisquam vel eveniet!</p>
					   <div className='w-fit mt-10'>
							<BoxText>Download Your App</BoxText>
					   </div>
					</div>                 
				</div>
				 <div data-aos="fade-down" className='flex items-center justify-center'>
				<div className="relative ">
					{/* Card du fond */}
					<div className="
					absolute
					rotate-[-50deg]
					-translate-x-6
					-translate-y-4
					
						
					">
						<Image
						src="/images/coffee-banner.png"
						alt="Phone Back"
						width={200}
						height={200}
						className="shadow-lg max-sm:w-[100px]"
						/>
					</div>

					{/* Card devant */}
					<div className="relative z-10">
						<Image
						src="/images/coffee-banner.png"
						alt="Phone Front"
						width={200}
						height={200}
						className="rounded-2xl shadow-2xl"
						/>
					 </div>
				</div>
			</div>

			</div>
		   

		</div>
	  
	</div>
  )
}

export default Moment
