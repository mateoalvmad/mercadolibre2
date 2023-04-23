import React from 'react';
import Image from 'next/image'

interface DiscoverCardProps {
    name: string;
    tag1: string;
    tag2: string;
    button: string;
    image: string;

}

const DiscoverCard = ({name, tag1, tag2, button, image}: DiscoverCardProps) => {
  return (
    <section>
      <div className='flex flex-col-reverse justify-end rounded-md bg-white shadow-md md:h-[250px] md:w-[584px] md:flex-row '>
        <div className='flex flex-col items-start py-14 pr-7 pl-8 text-gray-700'>
          <span className='font-semibold text-xs leading-3 uppercase tracking-[4px]'>{name}</span>
          <div className='flex flex-col font-semibold text-2xl leading-8 my-3'>
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
