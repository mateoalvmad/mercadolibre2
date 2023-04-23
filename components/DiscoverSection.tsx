import React from 'react';
import DiscoverCard from './DiscoverCard';

const discoverInfo = {
  discover: [
    {
      name: 'RENUEVA TUS ESPACIOS',
      tag1: 'HOGAR MUEBLES',
      tag2: 'HASTA 50% OFF',
      button: 'Ver más',
      image: '/media/discover/discovercard2.png',
    },
    {
      name: 'SUSCRÍBETE AL NIVEL 6',
      tag1: 'POR SOLO',
      tag2: '$ 17.990 CADA MES',
      button: 'Suscríbete',
      image: '/media/discover/discovercard1.png',
    },
  ],
};

const DiscoverSection = () => {
  return (
    <section>
      <div className='flex justify-center gap-5 pb-[21.19px] pt-[54.81px]'>
        <div className='md:w-[1180px]'>
          <span className='text-2xl font-light text-section-title'>
            Descubre
          </span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 md:flex-row '>
        {discoverInfo.discover.map((discover, index) => {
          return (
            <DiscoverCard
              key={index}
              name={discover.name}
              tag1={discover.tag1}
              tag2={discover.tag2}
              button={discover.button}
              image={discover.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export { DiscoverSection };
