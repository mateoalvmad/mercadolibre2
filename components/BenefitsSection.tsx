import React from 'react'
import Image from 'next/image'

const BenefitsSection = () => {
  return (
    <section className="w-full bg-section-color">
      <div className="flex justify-center gap-6 pt-[80px] pb-5">
        <div className="w-[280px] md:w-[1180px]">
          <span className="text-2xl font-light text-section-title">Beneficios de Mercado Puntos</span>
          <span className="text-sm font-normal text-section-subtitle pt-2 pl-4">Ver todos los beneficios</span>
        </div> 
      </div>
      <div className="flex flex-col items-center md:justify-center md:flex-row gap-4">
        <div className="w-[384px] h-[250px] rounded-md pt-[154px] pl-4 bg-[url('/media/benefits/card1.png')]">
          <div className="flex gap-4">
            <Image src={"/media/benefits/combo.png"} alt={"benefits"} width={80} height={80}/>
            <div className="pt-[15px]">
              <span className="benefits-info-description-title">Sin cargo con el nivel 6{' '}</span>
              <span className="benefits-info-description-subtitle">Disney+ y Star+{' '}</span>
            </div>
          </div>
        </div>
        <div className="w-[384px] h-[250px] rounded-md pt-[154px] pl-4 bg-[url('/media/benefits/card2.png')]">
          <div className="flex gap-4">
            <div>
              <Image src={"/media/benefits/hbo.png"} alt={"benefits"} width={80} height={80}/>
            </div>
            <div className="pt-[15px]">
              <span className='benefits-info-description-trial'>7 DÍAS GRATIS</span>
              <span className="benefits-info-description-title">Hasta 50% OFF</span>
              <span className="benefits-info-description-subtitle">HBO Max</span>
            </div>
          </div>
        </div>
        <div className="w-[384px] h-[250px] rounded-md pt-[154px] pl-4 bg-[url('/media/benefits/card3.png')]">
          <div className="flex gap-4">
            <div>
              <Image src={"/media/benefits/paramount.png"} alt={"benefits"} width={80} height={80}/>
            </div>
            <div className="pt-[15px]">
              <span className='benefits-info-description-trial'>7 DÍAS GRATIS</span>
              <span className="benefits-info-description-title">Hasta 50% OFF</span>
              <span className="benefits-info-description-subtitle">Paramount+</span>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}

export {BenefitsSection}