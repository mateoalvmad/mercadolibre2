import React from 'react'
import Image from 'next/image'
import {MdShoppingCart} from 'react-icons/md'

const Header = () => {
  return (
    <header className='debug hidden md:block w-full h-[100px] pt-2.5 bg-header-background'>
    	<div className="flex justify-center">
      	<div className="flex w-[1180px] gap-12">
          <Image src={"/media/logo-mercadolibre.png"} alt={"Logo de mercadolibre"} width={134} height={34}/>
          <div className="w-[598px] h[39px] bg-white rounded-sm pt-2.5 pb-2 pl-4">
            <input type="text" className="w-[550px] h[39px] text-input-text text-sm font-light" placeholder="Buscar productos, marcas y más..." required/>
          </div>
        </div> 
      </div>
      <div className="flex justify-center pt-6">
        <span className="text-xs font-normal text-section-black pr-9">Ingresa tu domicilio</span>
        <span className="text-xs font-normal text-categories-black pl-4">Categorías</span>
        <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_1_16" fill="white">
          	<path d="M4.54688 0.757355L8.78952 5L4.54688 9.24265L0.304229 5L4.54688 0.757355Z"/>
          </mask>
          <path d="M4.54688 9.24265L3.48621 10.3033L4.54688 11.364L5.60754 10.3033L4.54688 9.24265ZM7.72886 3.93934L3.48621 8.18199L5.60754 10.3033L9.85018 6.06066L7.72886 3.93934ZM5.60754 8.18199L1.36489 3.93934L-0.756431 6.06066L3.48621 10.3033L5.60754 8.18199Z" fill="black" fill-opacity="0.3" mask="url(#path-1-inside-1_1_16)"/>
        </svg>
        <span className="text-xs font-normal text-categories-black pl-4">Ofertas</span>
        <span className="text-xs font-normal text-categories-black pl-4">Historial</span>
        <span className="text-xs font-normal text-categories-black pl-4">Supermercado</span>
        <span className="text-xs font-normal text-categories-black pl-4">Moda</span>
        <span className="text-xs font-normal text-categories-black pl-4">Vender</span>
        <span className="text-xs font-normal text-categories-black pl-4">Ayuda / PQR</span>
        <span className="text-xs font-normal text-section-black pr-16 pl-56">Crea tu cuenta Ingresa Mis compras</span>  
        <button   type="button" className="text-black w-8 h-10 pb-14 text-2xl" >
        <MdShoppingCart/>        
        </button>
      </div>
    </header>
  )
}
export {Header}


