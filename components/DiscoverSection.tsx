import React from 'react'
import Image from 'next/image'

const DiscoverSection = () => {
  return (
    <section className="w-full bg-section-color">
      <div className="flex justify-center pt-[93.13px] pb-[19.19px]">
        <div className="w-[1180px]">
          <span className='sections-title'>Descubre</span>
        </div>
      </div>
      <div className='flex justify-center gap-4 '>
        <div className='discover-card'>
          <div className='discover-card-info'>
            <span className='discover-card-info-text'>RENUEVA TUS ESPACIOS</span>
            <div className='discover-card-info-title'>
              <span>HOGAR MUEBLES</span>
              <span>HASTA 50% OFF</span>
            </div>
            <button className='section-button'>Ver más</button>
          </div>
          <Image src={"/media/discover/discovercard2.png"} alt={"benefits"} width={290} height={250} className="rounded-sm"/>
        </div>
        <div className='discover-card'>
          <div className='discover-card-info'>
            <span className='discover-card-info-text'>SUSCRÍBETE AL NIVEL 6</span>
            <div className='discover-card-info-title'>
              <span>POR SOLO</span>
              <span>$ 17.990 CADA MES</span>
            </div>
            <button className='section-button'>Suscríbete</button>
          </div>
            <Image src={"/media/discover/discovercard1.png"} alt={"benefits"} width={289} height={250} className="rounded-sm"/>
        </div>
      </div>
    </section>
  )
}

export {DiscoverSection}