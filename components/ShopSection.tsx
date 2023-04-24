import React from 'react';
import Image from 'next/image';
import ShopsCards from './ShopsCards';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const shopsInfo = {
  shops: [
    {
      banner: '/media/shops/legoback.png',
      logo: '/media/shops/lego.png',
      title: 'Lego',
      images: [
        '/media/shops/lego1.png',
        '/media/shops/lego2.png',
        '/media/shops/lego3.png',
      ],
      children: (
        <Image
          src={'/media/shops/legoback.png'}
          alt={'benefits'}
          width={340}
          height={95}
          className='rounded-t-md'
        />
      ),
    },
    {
      logo: '/media/shops/mi.png',
      title: 'Xiaomi',
      images: [
        '/media/shops/xiomi1.png',
        '/media/shops/xiomi2.png',
        '/media/shops/xiomi3.png',
      ],
      children: (
        <Image
          src={'/media/shops/xiomibacck.png'}
          alt={'benefits'}
          width={340}
          height={95}
          className='rounded-t-md'
        />
      ),
    },
    {
      logo: '/media/shops/oster.png',
      title: 'Oster',
      images: [
        '/media/shops/oster1.png',
        '/media/shops/oster2.png',
        '/media/shops/oster3.png',
      ],
      children: (
        <Image
          src={'/media/shops/osterback.png'}
          alt={'benefits'}
          width={340}
          height={95}
          className='rounded-t-md'
        />
      ),
    },
    {
      banner: '',
      logo: '/media/shops/nikon.png',
      title: 'Nikon',
      images: [
        '/media/shops/nikon1.png',
        '/media/shops/nikon2.png',
        '/media/shops/nikon3.png',
      ],
      children: <div className='h-[95px] rounded-t-md bg-gray-300'></div>,
    },
  ],
};

const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const ShopSection = () => {
  return (
    <section>
      <div className='flex justify-center gap-5 pb-[21.19px] pt-[54.81px]'>
        <div className='flex flex-col md:w-[1180px] md:flex-row'>
          <span className='text-2xl font-light text-section-title'>
            Las mejores tiendas te esperan
          </span>
          <span className='pl-4 pt-2 text-sm font-normal text-section-subtitle'>
            Ver tiendas
          </span>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[284px] gap-4 md:w-[1180px]'>
          <Slider {...settings}>
            {shopsInfo.shops.map((shops, index) => {
              return (
                <ShopsCards
                  logo={shops.logo}
                  title={shops.title}
                  images={shops.images}
                  children={shops.children}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export { ShopSection };
