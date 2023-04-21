import {Header} from '@/components/Header'
import { OfferSection } from '@/components/OfferSection'
import { PosterSection } from '@/components/PosterSection'
import {Footer} from '@/components/Footer'
import { Prefooter } from '@/components/Prefooter'
import {Categoria} from '@/components/Categoria'
import { Carditem } from '@/components/Carditem'
import { Layout } from '@/layouts/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image';

const items ={
  itemsCol: [
    {
      imagen1:'media/item1-1.png',
      imagen2:'media/item1-2.png'
    },
    {
      imagen1:'media/item2-1.png',
      imagen2:'media/item2-2.png'
    },
    {
      imagen1:'media/item3-1.png',
      imagen2:'media/item3-2.png'
    },
    {
      imagen1:'media/item4-1.png',
      imagen2:'media/item4-2.png'
    },
  ] 
}

const indexPage = () => {
  return (
    <>
      <Head>
        <title>Mercadolibre</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout>
        <>
          <PosterSection/> 
          <OfferSection/> 
           <section className='flex h-[340px] w-full flex-col rounded bg-white'>
            <div className='grid-cols-[1024px 3px 154px] grid h-[87px] w-full rounded-t-md bg-gradient-to-r from-[#a90f90] to-[#0c1a51] '>
              <span className='pb-6  pl-0 pl-6 pt-6 text-2xl font-medium text-white'>
                Suscríbete al nivel 6
              </span>
              <div className='my-6 h-[37px] w-0.5 bg-white '></div>
              <div className='flex flex-col justify-center pl-1.5 pr-6 text-sm font-semibold text-white'>
                <span className='text-sm font-medium line-through'>
                  $ 50.690
                </span>
                <div>
                  <span className='text-[22px] font-semibold leading-6'>
                    $ 17.899
                  </span>
                  <span>/mes</span>
                </div>
              </div>
            </div>
            <div className='flex h-full flex-col'>
              <span className='h-11 pl-6 pt-5 text-lg font-normal leading-4'>
                Consigue los mejores beneficios en Mercado Libre
              </span>
              <div className='py- grid h-32 grid-cols-3 px-6'>
                <div className='flex w-[337px] flex-row items-center justify-center gap-4 pr-12 text-base font-normal leading-4'>
                <Image src='/media/combo/disney.png' 
                    className='w-[73px] h-[73px]'
                    width={73}
                    height={73}
                    alt='benefits' />
                  <span>Disney+ sin cargo</span>
                </div>
                <div className='flex w-[337px] flex-row items-center justify-center gap-4 pr-12 text-base font-normal leading-4'>
                <Image src='/media/combo/star.png' 
                    className='w-[73px] h-[73px]'
                    width={73}
                    height={73}
                    alt='benefits' />
                  <span>Star+ sin cargo</span>
                </div>
                <div className='flex w-[337px] flex-row items-center justify-center gap-4 pr-12 text-base font-normal leading-4'>
                    <Image src='/media/combo/truck.png' 
                    className='w-[73px] h-[73px]'
                    width={73}
                    height={73}
                    alt='benefits' />
                  <span>
                    Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos
                    de menos de $ 90.000
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className='flex h-20 items-end justify-end'>
              <button className='section-button mx-7 my-4'>Suscríbete</button>
            </div>
          </section>
          <section className='w-full py-20'>
            <div className='flex flex-row items-end gap-4'>
              <span className='sections-title'>
                Beneficios de Mercado Puntos
              </span>
              <span className='sections-blue'>Ver todos los beneficios</span>
            </div>
            <div className='flex flex-row justify-center gap-4 py-5'>
              <div className='benefits-card'>
                <Image
                  className='benefits-image'
                  src='/media/benefits/card1.png'
                  fill
                  alt='benefits'
                />
                <div className='benefits-info'>
                  <Image
                    className='benefits-info-logo'
                    src='/media/benefits/combo.png'
                    width={80}
                    height={80}
                    alt='benefits'
                  />
                  <div className='benefits-info-description gap-3'>
                    <span className='benefits-info-description-title'>
                      Sin cargo con el nivel 6{' '}
                    </span>
                    <span className='benefits-info-description-subtitle'>
                      Disney+ y Star+{' '}
                    </span>
                  </div>
                </div>
              </div>
              <div className='benefits-card'>
                <Image
                  className='benefits-image'
                  src='/media/benefits/card2.png'
                  fill
                  alt='benefits'
                />
                <div className='benefits-info'>
                  <Image
                    className='benefits-info-logo'
                    src='/media/benefits/hbo.png'
                    width={80}
                    height={80}
                    alt='benefits'
                  />
                  <div className='benefits-info-description gap-1'>
                    <span className='benefits-info-description-gift'>
                      7 DÍAS GRATIS
                    </span>
                    <span className='benefits-info-description-title'>
                      Hasta 50% OFF
                    </span>
                    <span className='benefits-info-description-subtitle'>
                      HBO Max
                    </span>
                  </div>
                </div>
              </div>
              <div className='benefits-card'>
                <Image
                  className='benefits-image'
                  src='/media/benefits/card3.png'
                  fill
                  alt='benefits'
                />
                <div className='benefits-info'>
                  <Image
                    className='benefits-info-logo'
                    src='/media/benefits/paramount.png'
                    width={80}
                    height={80}
                    alt='benefits'
                  />
                  <div className='benefits-info-description gap-1'>
                    <span className='benefits-info-description-gift'>
                      7 DÍAS GRATIS
                    </span>
                    <span className='benefits-info-description-title'>
                      Hasta 50% OFF
                    </span>
                    <span className='benefits-info-description-subtitle'>
                      Paramount+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='w-full'>
            <span className='sections-title'>Descubre</span>
            <div className='my-5 flex flex-row items-center gap-4 '>
              <div className='discover-card'>
                <div className='discover-card-info'>
                  <span className='discover-card-info-text'>
                    RENUEVA TUS ESPACIOS
                  </span>
                  <div className='discover-card-info-title'>
                    <span>HOGAR MUEBLES</span>
                    <span>HASTA 50% OFF</span>
                  </div>
                  <button className='section-button'>Ver más</button>
                </div>
                <Image
                  className='rounded-sm'
                  src='/media/discover/discovercard2.png'
                  width={290}
                  height={250}
                  alt='benefits'
                />
              </div>
              <div className='discover-card'>
                <div className='discover-card-info'>
                  <span className='discover-card-info-text'>
                    SUSCRÍBETE AL NIVEL 6
                  </span>
                  <div className='discover-card-info-title'>
                    <span>POR SOLO</span>
                    <span>$ 17.990 CADA MES</span>
                  </div>
                  <button className='section-button'>Suscríbete</button>
                </div>
                <Image
                  className='rounded-sm'
                  src='/media/discover/discovercard1.png'
                  width={290}
                  height={250}
                  alt='benefits'
                />
              </div>
            </div>
          </section>
          <section className='mb-5 mt-14'>
            <div className='flex flex-row items-end gap-6'>
              <span className='sections-title'>
                Las mejores tiendas te esperan
              </span>
              <span className='sections-blue'>Ver tiendas</span>
            </div>
            <div className=' mt-5 flex w-full flex-row items-center gap-4'>
              <div className='shops-card'>
                <Image
                  className='shops-card-banner'
                  src='/media/shops/legoback.png'
                  width={340}
                  height={95}
                  alt='benefits'
                />
                <Image
                  className='shops-card-logo'
                  src='/media/shops/lego.png'
                  width={80}
                  height={80}
                  alt=''
                />
                <div className='shops-card-info'>
                  <span className='shops-card-info-title'>Lego</span>
                  <div className='shops-card-info-images'>
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/lego1.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/lego2.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/lego3.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                  </div>
                  <span className='shops-card-info-text'>Ver tienda</span>
                </div>
              </div>
              <div className='shops-card'>
                <Image
                  className='shops-card-banner'
                  src='/media/shops/xiomibacck.png'
                  width={340}
                  height={95}
                  alt='benefits'
                />
                <Image
                  className='shops-card-logo'
                  src='/media/shops/mi.png'
                  width={80}
                  height={80}
                  alt=''
                />
                <div className='shops-card-info'>
                  <span className='shops-card-info-title'>Xiaomi</span>
                  <div className='shops-card-info-images'>
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/xiomi1.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/xiomi2.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/xiomi3.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                  </div>
                  <span className='shops-card-info-text'>Ver tienda</span>
                </div>
              </div>
              <div className='shops-card'>
                <Image
                  className='shops-card-banner'
                  src='/media/shops/osterback.png'
                  width={340}
                  height={95}
                  alt='benefits'
                />
                <Image
                  className='shops-card-logo'
                  src='/media/shops/oster.png'
                  width={80}
                  height={80}
                  alt=''
                />
                <div className='shops-card-info'>
                  <span className='shops-card-info-title'>Oster</span>
                  <div className='shops-card-info-images'>
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/oster1.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/oster2.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/oster3.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                  </div>
                  <span className='shops-card-info-text'>Ver tienda</span>
                </div>
              </div>
              <div className='shops-card'>
                <div className='shops-card-banner-nikon'></div>
                <Image
                  className='shops-card-logo'
                  src='/media/shops/nikon.png'
                  width={80}
                  height={80}
                  alt=''
                />
                <div className='shops-card-info'>
                  <span className='shops-card-info-title'>Nikon</span>
                  <div className='shops-card-info-images'>
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/nikon1.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/nikon2.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                    <Image
                      className='shops-card-info-image'
                      src='/media/shops/nikon3.png'
                      width={70}
                      height={70}
                      alt=''
                    />
                  </div>
                  <span className='shops-card-info-text'>Ver tienda</span>
                </div>
              </div>
            </div>
          </section>
          <section className='super'>
          <div className="texto-grande">
                <span>Colecciones:</span>
                <span className="text-2xl font-bold flex items-center text-gray-500">Supermercado</span>
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7149 0.75L7.44338 7.0065L1.17188 0.75" stroke="#3483FA" stroke-width="1.5"/>
                </svg>                    
            </div>
            <div className="w-3/4 flex ml-40 mt-6 text-gray-600 gap-3">
                <div className="grid cursor-pointer w-96 bg-white h-96 shadow-sm rounded-sm pb-4"> 
                    <img  src="/media/huggies.png" alt="producto"/>
                    <div className="text-3xl font-bold grid pl-6 uppercase">
                        <span className="font-semibold text-sm flex items-center letter-spacing-descubre">Descubre</span>
                        <span >Supermercado</span>                   
                    </div>                
                </div> 
                {
                items.itemsCol.map((item, index)=>{
                  return <Carditem key={`${item.imagen1}_${index}`} imagen1={item.imagen1} imagen2={item.imagen2}/>
                })}                                      
            </div>
          </section>
          <section className='categories'>
          <div className="texto-grande">
                  <span>Categorías populares</span>
            </div>
            <div className="w-80 grid ml-40 mt-4 text-gray-600 gap-1 mb-5">
                  <div className="flex gap-1">
                    <Categoria categoria="Carros, Motos y Otros">
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.5 20.375L40.731 7.111C40.599 6.117 39.751 5.375 38.749 5.375H10.251C9.249 5.375 8.401 6.117 8.269 7.111L6.5 20.375" stroke="#3483FA" stroke-miterlimit="10"/>
                                <path d="M14.5 37.375V43.375H5.5V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                                <path d="M43.5 37.375V43.375H34.5V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                                <path d="M46.5 37.375H2.5V26.778C2.5 25.87 2.809 24.988 3.377 24.279L6.5 20.375H42.5L45.623 24.279C46.191 24.989 46.5 25.87 46.5 26.778V37.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                                <path d="M38.5 32.375C40.1569 32.375 41.5 31.0319 41.5 29.375C41.5 27.7181 40.1569 26.375 38.5 26.375C36.8431 26.375 35.5 27.7181 35.5 29.375C35.5 31.0319 36.8431 32.375 38.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                                <path d="M10.5 32.375C12.1569 32.375 13.5 31.0319 13.5 29.375C13.5 27.7181 12.1569 26.375 10.5 26.375C8.84315 26.375 7.5 27.7181 7.5 29.375C7.5 31.0319 8.84315 32.375 10.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                                <path d="M21.5 29.375H27.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                            </svg>
                    </Categoria>
                      <Categoria categoria="Computación">
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_464)">
                              <path d="M24.5 42.375V36.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M12.5 44.375C12.5 44.375 17.5 42.375 24.5 42.375C31.5 42.375 36.5 44.375 36.5 44.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M46.5 4.375H2.5V36.375H46.5V4.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M2.5 30.375H46.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_464">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </Categoria>
                      <Categoria categoria="Ropa y Accesorios">
                      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_488)">
                              <path d="M32.5 4.375C32.5 8.775 28.9 12.375 24.5 12.375C20.1 12.375 16.5 8.775 16.5 4.375H10.5L2.5 8.375V20.375H10.5V44.375H38.5V20.375H46.5V8.375L38.5 4.375H32.5Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_488">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </Categoria>
                      <Categoria categoria="Hogar y Muebles">
                      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_513)">
                              <path d="M8.5 46.375V42.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M40.5 46.375V42.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M40.5 23.475V6.375C40.5 4.175 38.7 2.375 36.5 2.375H12.5C10.3 2.375 8.5 4.175 8.5 6.375V23.475" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M46.5 42.375V28.375C46.5 25.575 44.3 23.375 41.5 23.375C38.7 23.375 36.5 25.575 36.5 28.375V32.375H12.5V28.375C12.5 25.575 10.3 23.375 7.5 23.375C4.7 23.375 2.5 25.575 2.5 28.375V42.375H46.5Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_513">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </Categoria>
                      <Categoria categoria="Accesorios para Vehículos">
                      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_542)">
                              <path d="M7.52023 23.5386C14.5098 26.7385 19.6637 33.2535 21.1032 41.0356" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M41.4798 23.5386C34.4902 26.7385 29.3363 33.2535 27.8968 41.0356" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M8.58936 18.375C8.58936 18.375 16.563 17.375 24.5003 17.375C32.4375 17.375 40.4108 18.375 40.4108 18.375" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M24.5 46.375C36.6503 46.375 46.5 36.5253 46.5 24.375C46.5 12.2247 36.6503 2.375 24.5 2.375C12.3497 2.375 2.5 12.2247 2.5 24.375C2.5 36.5253 12.3497 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M24.5 41.375C33.8888 41.375 41.5 33.7638 41.5 24.375C41.5 14.9862 33.8888 7.375 24.5 7.375C15.1112 7.375 7.5 14.9862 7.5 24.375C7.5 33.7638 15.1112 41.375 24.5 41.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M24.5 30.375C26.7091 30.375 28.5 28.5841 28.5 26.375C28.5 24.1659 26.7091 22.375 24.5 22.375C22.2909 22.375 20.5 24.1659 20.5 26.375C20.5 28.5841 22.2909 30.375 24.5 30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_542">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </Categoria>
                      <Categoria categoria="Electrodomésticos">
                      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_571)">
                              <path d="M46.5 2.375H2.5V46.375H46.5V2.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M39.5 18.375H9.5V39.375H39.5V18.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M30.5 26.375V28.375H18.5V26.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M24.5 12.375C25.6046 12.375 26.5 11.4796 26.5 10.375C26.5 9.27043 25.6046 8.375 24.5 8.375C23.3954 8.375 22.5 9.27043 22.5 10.375C22.5 11.4796 23.3954 12.375 24.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M11.5 12.375C12.6046 12.375 13.5 11.4796 13.5 10.375C13.5 9.27043 12.6046 8.375 11.5 8.375C10.3954 8.375 9.5 9.27043 9.5 10.375C9.5 11.4796 10.3954 12.375 11.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M37.5 12.375C38.6046 12.375 39.5 11.4796 39.5 10.375C39.5 9.27043 38.6046 8.375 37.5 8.375C36.3954 8.375 35.5 9.27043 35.5 10.375C35.5 11.4796 36.3954 12.375 37.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_571">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </Categoria>
                      <Categoria categoria="Cámaras y Accesorios">
                      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_603)">
                              <path d="M7.5 6.375H12.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M5.5 43.375H43.5C45.157 43.375 46.5 42.032 46.5 40.375V14.375C46.5 12.718 45.157 11.375 43.5 11.375H35.5L31.501 5.375H21.5L17.5 11.375H5.5C3.843 11.375 2.5 12.718 2.5 14.375V40.375C2.5 42.032 3.843 43.375 5.5 43.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M26.5 37.375C32.0228 37.375 36.5 32.8978 36.5 27.375C36.5 21.8522 32.0228 17.375 26.5 17.375C20.9772 17.375 16.5 21.8522 16.5 27.375C16.5 32.8978 20.9772 37.375 26.5 37.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M10.5 20.375C11.0523 20.375 11.5 19.9273 11.5 19.375C11.5 18.8227 11.0523 18.375 10.5 18.375C9.94772 18.375 9.5 18.8227 9.5 19.375C9.5 19.9273 9.94772 20.375 10.5 20.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M10.5 20.375C11.0523 20.375 11.5 19.9273 11.5 19.375C11.5 18.8227 11.0523 18.375 10.5 18.375C9.94772 18.375 9.5 18.8227 9.5 19.375C9.5 19.9273 9.94772 20.375 10.5 20.375Z" fill="#3483FA"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_603">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                      </Categoria>
                  </div>
                  <div className="gap-1 flex">
                    <Categoria categoria="Celulares y Teléfonos">
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_451)">
                              <path d="M9.5 12.375H39.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M9.5 34.375H39.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M35.5 46.375H13.5C11.291 46.375 9.5 44.584 9.5 42.375V6.375C9.5 4.166 11.291 2.375 13.5 2.375H35.5C37.709 2.375 39.5 4.166 39.5 6.375V42.375C39.5 44.584 37.709 46.375 35.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M22.5 7.375H26.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_451">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                    </Categoria>
                    <Categoria categoria="Belleza y Cuidado Personal">
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_476)">
                              <path d="M18.5 12.375C24.4 12.375 28.5 9.475 28.5 2.875" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M30.5 30.375V8.375C30.5 5.075 29.8 2.375 26.5 2.375C23.2 2.375 18.5 7.075 18.5 10.375V30.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M36.5 30.375H12.5V46.375H36.5V30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_476">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                    </Categoria>
                    <Categoria categoria="Deportes y Fitness">
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_497)">
                              <path d="M16.5 3.875L24.5 9.875L32.5 3.875" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M2.5 25.6751L10.7 19.8751L7.5 10.4751" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M18.9 45.6749L16 36.075L6 36.275" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M43 36.275L33 36.075L30.1 45.6749" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M41.5 10.4751L38.3 19.8751L46.5 25.6751" stroke="#3483FA" stroke-miterlimit="10"/>
                              <path d="M28.5 30.375H20.5L16.5 22.375L24.5 16.375L32.5 22.375L28.5 30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M24.5 46.375C36.6503 46.375 46.5 36.5253 46.5 24.375C46.5 12.2247 36.6503 2.375 24.5 2.375C12.3497 2.375 2.5 12.2247 2.5 24.375C2.5 36.5253 12.3497 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_497">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                    </Categoria>
                    <Categoria categoria="Electrónica, Audio y Video">
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_525)">
                              <path d="M24.5 32.375C18.977 32.375 14.5 27.898 14.5 22.375V12.375C14.5 6.852 18.977 2.375 24.5 2.375C30.023 2.375 34.5 6.852 34.5 12.375V22.375C34.5 27.898 30.023 32.375 24.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M14.5 46.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M24.5 38.375V46.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M40.5 22.375C40.5 31.212 33.337 38.375 24.5 38.375C15.663 38.375 8.5 31.212 8.5 22.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M14.5 14.375H19.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M14.5 21.375H19.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M29.5 14.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M29.5 21.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_525">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                    </Categoria>
                    <Categoria categoria="Consolas y Videojuegos">
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_556)">
                              <path d="M39 30.375C39.8284 30.375 40.5 29.7034 40.5 28.875C40.5 28.0466 39.8284 27.375 39 27.375C38.1716 27.375 37.5 28.0466 37.5 28.875C37.5 29.7034 38.1716 30.375 39 30.375Z" fill="#3483FA"/>
                              <path d="M35 34.375C35.8284 34.375 36.5 33.7034 36.5 32.875C36.5 32.0466 35.8284 31.375 35 31.375C34.1716 31.375 33.5 32.0466 33.5 32.875C33.5 33.7034 34.1716 34.375 35 34.375Z" fill="#3483FA"/>
                              <path d="M36.5 20.375H12.5C6.977 20.375 2.5 24.852 2.5 30.375C2.5 35.898 6.977 40.375 12.5 40.375C16.598 40.375 20.111 37.904 21.656 34.375H27.344C28.888 37.904 32.401 40.375 36.5 40.375C42.023 40.375 46.5 35.898 46.5 30.375C46.5 24.852 42.023 20.375 36.5 20.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M12.5 26.375V34.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M8.5 30.375H16.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              <path d="M24.5 14.375V2.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_556">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                    </Categoria>
                    <Categoria categoria="Juegos y Juguetes">
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_585)">
                          <path d="M24.5 46.375C35.5457 46.375 44.5 37.4207 44.5 26.375C44.5 15.3293 35.5457 6.375 24.5 6.375C13.4543 6.375 4.5 15.3293 4.5 26.375C4.5 37.4207 13.4543 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                          <path d="M24.5 33.375L27.5 29.375H21.5L24.5 33.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                          <path d="M24.5 33.375L27.5 29.375H21.5L24.5 33.375Z" fill="#3483FA"/>
                          <path d="M24.5 33.375V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                          <path d="M20.5 37.375H28.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                          <path d="M17.5 24.375C18.6046 24.375 19.5 23.4796 19.5 22.375C19.5 21.2704 18.6046 20.375 17.5 20.375C16.3954 20.375 15.5 21.2704 15.5 22.375C15.5 23.4796 16.3954 24.375 17.5 24.375Z" fill="#3483FA"/>
                          <path d="M31.5 24.375C32.6046 24.375 33.5 23.4796 33.5 22.375C33.5 21.2704 32.6046 20.375 31.5 20.375C30.3954 20.375 29.5 21.2704 29.5 22.375C29.5 23.4796 30.3954 24.375 31.5 24.375Z" fill="#3483FA"/>
                          <path d="M14.442 9.085C14.471 8.846 14.5 8.622 14.5 8.375C14.5 5.061 11.814 2.375 8.5 2.375C5.186 2.375 2.5 5.061 2.5 8.375C2.5 11.689 5.186 14.375 8.5 14.375" stroke="#3483FA" stroke-miterlimit="10"/>
                          <path d="M34.558 9.085C34.529 8.846 34.5 8.622 34.5 8.375C34.5 5.061 37.186 2.375 40.5 2.375C43.814 2.375 46.5 5.061 46.5 8.375C46.5 11.689 43.814 14.375 40.5 14.375" stroke="#3483FA" stroke-miterlimit="10"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1_585">
                          <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                          </clipPath>
                          </defs>
                          </svg>
                    </Categoria>
                    <Categoria categoria="Herramientas">
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_616)">
                              <path d="M46 9.97509L40.1 15.8751L33 8.77509L38.9 2.87509C37.5 2.47509 36.1 2.27509 34.5 2.37509C28.9 2.87509 24.4 7.87509 24.5 13.4751C24.5 14.5751 24.7 15.6751 25 16.6751L5.80001 33.6751C2.90001 36.1751 2.80001 40.6751 5.50001 43.3751C8.20001 46.0751 12.6 45.9751 15.2 43.0751L32.2 23.8751C33.9 24.3751 35.8 24.5751 37.8 24.1751C41.8 23.3751 45.1 20.3751 46.2 16.4751C46.7 14.1751 46.6 11.9751 46 9.97509Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_616">
                              <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)"/>
                              </clipPath>
                              </defs>
                              </svg>
                    </Categoria>
                  </div>
            </div>
          </section>
          <section className='pre-footer'></section>
          <footer>
            <Prefooter/>
            <Footer/>
          </footer>
        </>
      </Layout>
    </> 
  )
}

export default indexPage