import React, { useEffect, useState, use } from 'react'
import Image from 'next/image'
import { CartContextProvider, useCartContext } from '@/context/cartContext';

interface OffersCardProps {
  name: string;
  image: string;
  price: number;
  discount: string;
  delivery?: string;
  children?: JSX.Element;
}

const OffersCard = ({name, image, price, discount, delivery, children}:OffersCardProps) => {
  const {itemsCount, setItemsCount}= useCartContext()
  const increaseCounter=()=>{
    setItemsCount(itemsCount+1)
  }
    return (
    <div onClick={increaseCounter} className="flex flex-col px-4 pt-5 w-[224px] h-[350px] gap-1 bg-white rounded-sm hover:cursor-pointer hover:scale-105">
      <Image src={image} alt={name} width={224} height={224}/>
      <hr/>
      <div className= "pt-1">
        <span className="text-2xl font-normal pr-3 text-section-black">{price}</span>
        <span className="text-sm font-normal text-card-green">{discount}</span> 
      </div>
      <div className= "flex pt-1.5">
        <span className="text-xs font-semibold pt-1.5 pr-1.5 text-card-green">{delivery}</span>
        {children}
      </div>  
    </div>
  )
}

export {OffersCard}
