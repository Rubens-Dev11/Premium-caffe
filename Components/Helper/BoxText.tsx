import React from 'react'

type Props={
    children:React.ReactNode;
};

const BoxText = ({children}: Props) => {
  return (

     <h1 className=' cursor-pointer px-5 rounded-lg py-2 bg-black text-white '>
        {children}
     </h1>
      
  )
}

export default BoxText
