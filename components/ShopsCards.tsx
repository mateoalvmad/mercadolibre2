import React from 'react'
import Image from 'next/image'

interface shopCardsProps {
    logo: string;
    title: string;
    images: string[];
    children: JSX.Element;
}

const ShopsCards = ({logo, title, images, children}: shopCardsProps) => {
  return (
    <>
        <div className='flex flex-col items-center relative w-[284px] rounded-md shadow-md'>
            {children}
          <Image src={logo} alt={""} width={80} height={80} className="absolute top-[55px] rounded-md shadow-md opacity-90"/>
          <div className='flex flex-col items-center h-[245px] w-[284px] py-14 pr-8 pl-5 rounded-b-md bg-white text-gray-700'>
            <span className='font-semibold text-2xl leading-7 text-gray-700'>{title}</span>
            <div className='flex flex-row items-center justify-center gap-2 my-5 mx-7'>
            {images.map((image, index) => {
              return (
                <Image src={image} alt={"shops"} width={70} height={70} className="rounded-md border border-gray-300"/>
              );
            })}
            </div>
             <span className='font-medium text-base leading-6 text-gray-500'>Ver tienda</span>
          </div>
        </div>
    </>
  )
}

export default ShopsCards