import React from 'react';
import Image from 'next/image';

interface OffersCardProps {
  name: string;
  image: string;
  price: string;
  discount: string;
  delivery?: string;
  children?: JSX.Element;
}

const OffersCard = ({
  name,
  image,
  price,
  discount,
  delivery,
  children,
}: OffersCardProps) => {
  return (
    <div className='flex h-[350px] w-[250px] flex-col gap-1 rounded-sm bg-white px-4 pt-5 hover:scale-105 hover:cursor-pointer md:w-[224px]'>
      <Image src={image} alt={name} width={224} height={224} />
      <hr />
      <div className='pt-1'>
        <span className='pr-3 text-2xl font-normal text-section-black'>
          {price}
        </span>
        <span className='text-sm font-normal text-card-green'>{discount}</span>
      </div>
      <div className='flex pt-1.5'>
        <span className='pr-1.5 pt-1.5 text-xs font-semibold text-card-green'>
          {delivery}
        </span>
        {children}
      </div>
    </div>
  );
};

export { OffersCard };
