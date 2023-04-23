import React from 'react';
import Image from 'next/image';

const SubscriptionSection = () => {
  return (
    <section className='w-full'>
      <div className='flex justify-center pt-14'>
        <div className='flex h-[87px] w-[500px] justify-between rounded-t-md bg-gradient-to-r from-[#a90f90] to-[#0c1a51] md:w-[1180px]'>
          <span className='pb-6 pl-6 pr-7 pt-7 text-2xl font-medium text-white'>
            Suscríbete al nivel 6
          </span>
          <div className='flex pr-6 pt-6'>
            <svg
              width='3'
              height='38'
              viewBox='0 0 3 38'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask id='path-1-inside-1_1_207' fill='white'>
                <path d='M0.0625 0.1875H2.0625V37.1875H0.0625V0.1875Z' />
              </mask>
              <path
                d='M2.0625 37.1875V0.1875H-1.9375V37.1875H2.0625Z'
                fill='white'
                mask='url(#path-1-inside-1_1_207)'
              />
            </svg>
            <div className='flex flex-col pl-1.5'>
              <span className='text-sm font-medium text-white line-through'>
                $50.690
              </span>
              <span className='text-[22px] font-semibold text-white'>
                $17.899 /mes
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='h[276px] flex w-[500px] flex-col rounded-t-md bg-white md:w-[1180px]'>
          <span className='pb-6 pl-6 pr-5 pt-5 text-base font-normal text-black'>
            Consigue los mejores beneficios en Mercado Libre
          </span>
          <div className='flex flex-col gap-5 pb-[54px] pl-6 pr-6 pt-[10px] md:flex-row md:gap-[169px]'>
            <div className='flex gap-4'>
              <Image
                src={'/media/combo/disney.png'}
                alt={'benefits'}
                width={73}
                height={73}
              />
              <span className='w-[130px] pt-7 text-sm font-normal text-black'>
                Disney+ sin cargo
              </span>
            </div>
            <div className='flex gap-4'>
              <Image
                src={'/media/combo/star.png'}
                alt={'benefits'}
                width={73}
                height={73}
              />
              <span className='w-[130px] pt-7 text-sm font-normal text-black'>
                Star+ sin cargo
              </span>
            </div>
            <div className='flex gap-4'>
              <Image
                src={'/media/combo/truck.png'}
                alt={'benefits'}
                width={73}
                height={73}
              />
              <span className='w-[240px] pr-7 pt-7 text-sm font-normal text-black'>
                Envíos gratis y rápidos desde $90.000 y 40% OFF en envíos de
                menos de $90.000
              </span>
            </div>
          </div>
          <div className='flex h-20 items-end justify-end'>
            <button className='section-button mx-7 my-4'>Suscríbete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SubscriptionSection };
