import React from 'react';
import Image from 'next/image';

interface DiscoverCardProps {
  name: string;
  tag1: string;
  tag2: string;
  button: string;
  image: string;
}

const DiscoverCard = ({
  name,
  tag1,
  tag2,
  button,
  image,
}: DiscoverCardProps) => {
  return (
    <section>
      <div className='flex flex-col-reverse justify-end rounded-md bg-white shadow-md md:h-[250px] md:w-[584px] md:flex-row '>
        <div className='flex flex-col items-start py-14 pl-8 pr-7 text-gray-700'>
          <span className='text-xs font-semibold uppercase leading-3 tracking-[4px]'>
            {name}
          </span>
          <div className='my-3 flex flex-col text-2xl font-semibold leading-8'>
            <span>{tag1}</span>
            <span>{tag2}</span>
          </div>
          <button className='section-button'>{button}</button>
        </div>
        <Image
          src={image}
          alt={'benefits'}
          width={290}
          height={250}
          className='rounded-md'
        />
      </div>
    </section>
  );
};

export default DiscoverCard;
