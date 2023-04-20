import React from 'react'
import Image from 'next/image'

const SubscriptionSection = () => {
  return (
    <section className='w-full bg-section-color'>
      <div className="flex justify-center pt-14">
        <div className="flex justify-between w-[1180px] h-[87px] rounded-t-md bg-gradient-to-r from-[#a90f90] to-[#0c1a51]">
          <span className="text-2xl font-medium text-white pt-7 pr-7 pb-6 pl-6">Suscríbete al nivel 6</span>
          <div className="flex pt-6 pr-6">
            <svg width="3" height="38" viewBox="0 0 3 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_1_207" fill="white">
                <path d="M0.0625 0.1875H2.0625V37.1875H0.0625V0.1875Z"/>
              </mask>
              <path d="M2.0625 37.1875V0.1875H-1.9375V37.1875H2.0625Z" fill="white" mask="url(#path-1-inside-1_1_207)"/>
            </svg>
            <div className="flex flex-col pl-1.5">
              <span className="text-sm font-medium line-through text-white">$50.690</span>
              <span className='text-[22px] font-semibold text-white'>$17.899 /mes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-[1180px] h[276px] rounded-t-md bg-white">
          <span className="text-base font-normal text-black pt-5 pr-5 pb-6 pl-6">Consigue los mejores beneficios en Mercado Libre</span>
          <div className="flex gap-[169px] pt-[10px] pr-6 pb-[54px] pl-6">
            <div className="flex gap-4">
              <Image src={'/media/combo/disney.png'} alt={'benefits'} width={73} height={73}/>
              <span className="text-sm font-normal text-black pt-7 w-[130px]">Disney+ sin cargo</span>
            </div>
            <div className="flex gap-4">
              <Image src={'/media/combo/star.png'} alt={'benefits'} width={73} height={73}/>  
              <span className="text-sm font-normal text-black pt-7 w-[130px]">Star+ sin cargo</span>
            </div>
            <div className="flex gap-4">
              <Image src={'/media/combo/truck.png'} alt={'benefits'} width={73} height={73}/>        
              <span className="text-sm font-normal text-black pt-7 pr-7 w-[240px]">Envíos gratis y rápidos desde $90.000 y 40% OFF en envíos de menos de $90.000</span>
            </div>
          </div>
          <div className='flex h-20 items-end justify-end'>
            <button className='section-button mx-7 my-4'>Suscríbete</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export {SubscriptionSection}