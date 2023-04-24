import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {MdMenu, MdShoppingCart} from 'react-icons/md'
import { useCartContext } from '@/context/cartContext';



const Header = () => {
  const {itemsCount,setOpenModalCart}= useCartContext()
  
  return (
    <header className='hidden h-[100px] w-full bg-header-background pt-2.5 lg:block'>
      <div className='flex justify-center'>
        <div className='flex w-[1180px] gap-12'>
          <Image
            src={'/media/logo-mercadolibre.png'}
            alt={'Logo de mercadolibre'}
            width={134}
            height={34}
          />
          <div className='h[39px] w-[598px] rounded-sm bg-white pb-2 pl-4 pt-2.5'>
            <input
              type='text'
              className='h[39px] text-input-text w-[550px] text-sm font-light'
              placeholder='Buscar productos, marcas y más...'
              required
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-6'>
        <span className='pr-9 text-xs font-normal text-section-black'>
          Ingresa tu domicilio
        </span>
        <span className='pl-4 text-xs font-normal text-categories-black'>
          Categorías
        </span>
        <svg
          width='9'
          height='10'
          viewBox='0 0 9 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask id='path-1-inside-1_1_16' fill='white'>
            <path d='M4.54688 0.757355L8.78952 5L4.54688 9.24265L0.304229 5L4.54688 0.757355Z' />
          </mask>
          <path
            d='M4.54688 9.24265L3.48621 10.3033L4.54688 11.364L5.60754 10.3033L4.54688 9.24265ZM7.72886 3.93934L3.48621 8.18199L5.60754 10.3033L9.85018 6.06066L7.72886 3.93934ZM5.60754 8.18199L1.36489 3.93934L-0.756431 6.06066L3.48621 10.3033L5.60754 8.18199Z'
            fill='black'
            fill-opacity='0.3'
            mask='url(#path-1-inside-1_1_16)'
          />
        </svg>
        <span className='pl-4 text-xs font-normal text-categories-black'>
          Ofertas
        </span>
        <span className='pl-4 text-xs font-normal text-categories-black'>
          Historial
        </span>
        <span className='pl-4 text-xs font-normal text-categories-black'>
          Supermercado
        </span>
        <span className='pl-4 text-xs font-normal text-categories-black'>
          Moda
        </span>
        <span className='pl-4 text-xs font-normal text-categories-black'>
          Vender
        </span>
        <span className='pl-4 text-xs font-normal text-categories-black'>
          Ayuda / PQR
        </span>
        <span className='pl-56 pr-16 text-xs font-normal text-section-black'>
          Crea tu cuenta Ingresa Mis compras
        </span>
        <button  onClick={()=>setOpenModalCart(true)} type="button" className="text-black w-8 h-10 pb-14 text-2xl" >
          <div className='flex'><span className="text-xs">{itemsCount}</span>
          <MdShoppingCart/> 
        </div>        
        </button>
      </div>
    </header>
  );
};
export { Header };

const HeaderMovil = () => {
  const {itemsCount,setOpenModalCart}= useCartContext()
  return (
    <header className='h-[50px] w-full bg-header-background pt-1.5 lg:hidden'>
      <div className='mx-5 flex justify-evenly'>
        <Image
          src={'/media/logo-movil.png'}
          alt={'Logo de mercadolibre'}
          width={50}
          height={24}
        />
        <div className='flex'>
          <input
            type='text'
            className='h[39px] text-input-text w-[250px] pl-2 text-sm font-light'
            placeholder='Buscar productos, marcas y más...'
            required
          />
        </div>
        <div className='flex pt-1 text-3xl'>
          <MdMenu />
        </div>
        <div className='flex pt-[5px]'>
        <button  onClick={()=>setOpenModalCart(true)} type="button" className="text-black w-8 h-10 pb-14 text-2xl" >
          <div className='flex'><span className="text-xs">{itemsCount}</span>
          <MdShoppingCart/> 
        </div>        
        </button>
        </div>
      </div>
    </header>
  );
};
export { HeaderMovil };
