import React from 'react'

type Props={
    children: React.ReactNode
}
const Boxtwhite = ({children}:Props) => {
  return (
    <h1 className=' cursor-pointer px-5 rounded-lg py-2 bg-white shadow-lg text-black font-medium '>
        {children}
     </h1>
  )
}

export default Boxtwhite
