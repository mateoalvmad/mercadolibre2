import React from 'react';
import { SupermarketCard } from '@/components/SupermarketCard';

const items = {
  itemsCol: [
    {
      imagen1: 'media/item1-1.png',
      imagen2: 'media/item1-2.png',
    },
    {
      imagen1: 'media/item2-1.png',
      imagen2: 'media/item2-2.png',
    },
    {
      imagen1: 'media/item3-1.png',
      imagen2: 'media/item3-2.png',
    },
    {
      imagen1: 'media/item4-1.png',
      imagen2: 'media/item4-2.png',
    },
  ],
};

const SupermarketSection = () => {
  return (
    <section className=''>
      <div className='flex justify-center gap-4 pb-[21.19px] pt-[108.81px] '>
        <div className='flex justify-center md:w-[1180px] md:justify-start'>
          <span className='pr-2 text-2xl font-light text-section-title'>
            Colecciones:
          </span>
          <span className='pr-2 text-2xl font-bold text-section-title'>
            Supermercado
          </span>
          <div className='pt-3'>
            <svg
              width='15'
              height='9'
              viewBox='0 0 15 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.7149 0.75L7.44338 7.0065L1.17188 0.75'
                stroke='#3483FA'
                stroke-width='1.5'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex w-[385px] flex-wrap gap-4 md:w-[1180px] md:flex-row md:flex-nowrap'>
          <div className='grid h-96 w-96 rounded-md bg-white pb-4 shadow-sm'>
            <img src='/media/huggies.png' alt='producto' />
            <div className='grid pl-6 text-3xl font-bold uppercase'>
              <span className='letter-spacing-descubre flex items-center text-sm font-semibold'>
                Descubre
              </span>
              <span>Supermercado</span>
            </div>
          </div>
          {items.itemsCol.map((item, index) => {
            return (
              <SupermarketCard
                key={`${item.imagen1}_${index}`}
                imagen1={item.imagen1}
                imagen2={item.imagen2}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { SupermarketSection };
