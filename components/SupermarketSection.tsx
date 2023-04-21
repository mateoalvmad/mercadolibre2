import React from 'react'
import { SupermarketCard } from '@/components/SupermarketCard'

const items ={
  itemsCol: [
    {
      imagen1:'media/item1-1.png',
      imagen2:'media/item1-2.png'
    },
    {
      imagen1:'media/item2-1.png',
      imagen2:'media/item2-2.png'
    },
    {
      imagen1:'media/item3-1.png',
      imagen2:'media/item3-2.png'
    },
    {
      imagen1:'media/item4-1.png',
      imagen2:'media/item4-2.png'
    },
  ] 
}

const SupermarketSection = () => {
  return (
    <section className='w-full'>
      <div className='flex justify-center gap-4 pt-[108.81px] pb-[21.19px]'>
        <div className="flex w-[1180px]">
          <span className='text-2xl font-light text-section-title pr-2'>Colecciones:</span>
          <span className="text-2xl font-bold text-section-title pr-2">Supermercado</span>
          <div className='pt-3'>
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            < path d="M13.7149 0.75L7.44338 7.0065L1.17188 0.75" stroke="#3483FA" stroke-width="1.5"/>
            </svg>
          </div>                    
        </div>
      </div> 
      <div className="flex gap-4 justify-center text-gray-600">
        <div className="grid w-96 bg-white h-96 shadow-sm rounded-sm pb-4"> 
          <img  src="/media/huggies.png" alt="producto"/>
          <div className="text-3xl font-bold grid pl-6 uppercase">
            <span className="font-semibold text-sm flex items-center letter-spacing-descubre">Descubre</span>
            <span >Supermercado</span>                   
          </div>                
        </div> 
        {
        items.itemsCol.map((item, index)=>{
          return <SupermarketCard key={`${item.imagen1}_${index}`} imagen1={item.imagen1} imagen2={item.imagen2}/>
        })}                                      
      </div>
    </section>
  )
}

export {SupermarketSection}