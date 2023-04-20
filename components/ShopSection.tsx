import React from 'react'
import Image from 'next/image'

const ShopSection = () => {
  return (
    <section className='w-full bg-section-color'>
      <div className='flex justify-center gap-5 pt-[54.81px] pb-[21.19px]'>
        <div className='w-[1180px]'>
          <span className='text-2xl font-light text-section-title'>Las mejores tiendas te esperan</span>
          <span className='text-sm font-normal text-section-subtitle pt-2 pl-4'>Ver tiendas</span>
        </div>
      </div> 
      <div className="flex justify-center gap-4">
        <div className='shops-card'>
          <Image src={"/media/shops/legoback.png"} alt={"benefits"} width={340} height={95} className="shops-card-banner"/>
          <Image src={"/media/shops/lego.png"} alt={""} width={80} height={80} className="shops-card-logo"/>
          <div className='shops-card-info'>
            <span className='shops-card-info-title'>Lego</span>
            <div className='shops-card-info-images'>
              <Image src={"/media/shops/lego1.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
              <Image src={"/media/shops/lego2.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>    
              <Image src={"/media/shops/lego3.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
            </div>
             <span className='shops-card-info-text'>Ver tienda</span>
          </div>
        </div>
        <div className='shops-card'>
          <Image src={"/media/shops/xiomibacck.png"} alt={"benefits"} width={340} height={95} className="shops-card-banner"/>
          <Image src={"/media/shops/mi.png"} alt={""} width={80} height={80} className="shops-card-logo"/>
          <div className='shops-card-info'>
            <span className='shops-card-info-title'>Xiaomi</span>
            <div className='shops-card-info-images'>
              <Image src={"/media/shops/xiomi1.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
              <Image src={"/media/shops/xiomi2.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>    
              <Image src={"/media/shops/xiomi3.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
            </div>
            <span className='shops-card-info-text'>Ver tienda</span>
          </div>
        </div>
        <div className='shops-card'>
          <Image src={"/media/shops/osterback.png"} alt={"benefits"} width={340} height={95} className="shops-card-banner"/>
          <Image src={"/media/shops/oster.png"} alt={""} width={80} height={80} className="shops-card-logo"/>      
          <div className='shops-card-info'>
            <span className='shops-card-info-title'>Oster</span>
            <div className='shops-card-info-images'>
              <Image src={"/media/shops/oster1.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
              <Image src={"/media/shops/oster2.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
              <Image src={"/media/shops/oster3.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
            </div>
            <span className='shops-card-info-text'>Ver tienda</span>
          </div>
        </div>
        <div className='shops-card'>
          <div className='shops-card-banner-nikon'></div>
            <Image src={"/media/shops/nikon.png"} alt={""} width={80} height={80} className="shops-card-logo"/>
            <div className='shops-card-info'>
              <span className='shops-card-info-title'>Nikon</span>
              <div className='shops-card-info-images'>
                <Image src={"/media/shops/nikon1.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
                <Image src={"/media/shops/nikon2.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>
                <Image src={"/media/shops/nikon3.png"} alt={""} width={70} height={70} className="shops-card-info-image"/>  
              </div>
              <span className='shops-card-info-text'>Ver tienda</span>
          </div>
        </div>
      </div>
  </section>
  )
}

export {ShopSection}