import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OffersCard } from './OffersCard';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import { useCartContext } from '@/context/cartContext';
import { toast } from 'react-toastify';

const offersInfo = {
  offers: [
    {
      name: 'Silla',
      image: '/media/card1.png',
      price: 210900,
      discount: '32% OFF',
      delivery: 'Envío gratis',
    },
    {
      name: 'Micrófono',
      image: '/media/card2.png',
      price: 74990,
      discount: '25% OFF',
      delivery: 'Envío gratis',
      children: (
        <svg
          width='41'
          height='23'
          viewBox='0 0 41 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_1_158)'>
            <path
              d='M3.54828 5.34607H8.67511L6.1112 9.87583H10.3844L3.54828 18.029L5.25657 12.5939H0.984375L3.54828 5.34607ZM14.8546 14.6466H12.9434L14.5766 7.31485H20.0088L19.6419 8.96363H16.12L15.8761 10.107H19.3093L18.9424 11.7558H15.4985L14.8546 14.6466ZM24.0917 14.7792C21.8146 14.7792 20.6927 13.7012 20.6927 12.1627C20.6927 12.0417 20.7258 11.789 20.7483 11.6788L21.7258 7.31485H23.6693L22.7034 11.6349C22.6917 11.6905 22.6702 11.8105 22.6702 11.9431C22.681 12.548 23.1483 13.1305 24.0917 13.1305C25.1141 13.1305 25.6361 12.4924 25.8244 11.6349L26.7912 7.31485H28.7239L27.758 11.668C27.358 13.4485 26.3805 14.7792 24.0917 14.7792ZM33.9629 14.6466H29.0751L30.7073 7.31485H32.6185L31.3629 12.9978H34.3288L33.9629 14.6466ZM40.478 14.6466H35.5902L37.2234 7.31485H39.1346L37.879 12.9978H40.8449L40.478 14.6466Z'
              fill='#00A650'
            />
          </g>
          <defs>
            <clipPath id='clip0_1_158'>
              <rect
                width='40'
                height='22'
                fill='white'
                transform='translate(0.984375 0.6875)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Máquina de afeitar',
      image: '/media/card3.png',
      price: 134950,
      discount: '50% OFF',
      delivery: 'Envío gratis',
    },
    {
      name: 'Closet',
      image: '/media/card4.png',
      price: 149900,
      discount: '30% OFF',
      delivery: 'Envío gratis',
    },
    {
      name: 'Cortina',
      image: '/media/card5.png',
      price: 69990,
      discount: '17% OFF',
      children: (
        <svg
          width='41'
          height='23'
          viewBox='0 0 41 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_1_158)'>
            <path
              d='M3.54828 5.34607H8.67511L6.1112 9.87583H10.3844L3.54828 18.029L5.25657 12.5939H0.984375L3.54828 5.34607ZM14.8546 14.6466H12.9434L14.5766 7.31485H20.0088L19.6419 8.96363H16.12L15.8761 10.107H19.3093L18.9424 11.7558H15.4985L14.8546 14.6466ZM24.0917 14.7792C21.8146 14.7792 20.6927 13.7012 20.6927 12.1627C20.6927 12.0417 20.7258 11.789 20.7483 11.6788L21.7258 7.31485H23.6693L22.7034 11.6349C22.6917 11.6905 22.6702 11.8105 22.6702 11.9431C22.681 12.548 23.1483 13.1305 24.0917 13.1305C25.1141 13.1305 25.6361 12.4924 25.8244 11.6349L26.7912 7.31485H28.7239L27.758 11.668C27.358 13.4485 26.3805 14.7792 24.0917 14.7792ZM33.9629 14.6466H29.0751L30.7073 7.31485H32.6185L31.3629 12.9978H34.3288L33.9629 14.6466ZM40.478 14.6466H35.5902L37.2234 7.31485H39.1346L37.879 12.9978H40.8449L40.478 14.6466Z'
              fill='#00A650'
            />
          </g>
          <defs>
            <clipPath id='clip0_1_158'>
              <rect
                width='40'
                height='22'
                fill='white'
                transform='translate(0.984375 0.6875)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Crema contorno de ojos',
      image: '/media/item1-1.png',
      price: 119900,
      discount: '32% OFF',
      delivery: 'Envío gratis',
    },
    {
      name: 'Crema humectante',
      image: '/media/item3-2.png',
      price: 34990,
      discount: '25% OFF',
      delivery: 'Envío gratis',
      children: (
        <svg
          width='41'
          height='23'
          viewBox='0 0 41 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_1_158)'>
            <path
              d='M3.54828 5.34607H8.67511L6.1112 9.87583H10.3844L3.54828 18.029L5.25657 12.5939H0.984375L3.54828 5.34607ZM14.8546 14.6466H12.9434L14.5766 7.31485H20.0088L19.6419 8.96363H16.12L15.8761 10.107H19.3093L18.9424 11.7558H15.4985L14.8546 14.6466ZM24.0917 14.7792C21.8146 14.7792 20.6927 13.7012 20.6927 12.1627C20.6927 12.0417 20.7258 11.789 20.7483 11.6788L21.7258 7.31485H23.6693L22.7034 11.6349C22.6917 11.6905 22.6702 11.8105 22.6702 11.9431C22.681 12.548 23.1483 13.1305 24.0917 13.1305C25.1141 13.1305 25.6361 12.4924 25.8244 11.6349L26.7912 7.31485H28.7239L27.758 11.668C27.358 13.4485 26.3805 14.7792 24.0917 14.7792ZM33.9629 14.6466H29.0751L30.7073 7.31485H32.6185L31.3629 12.9978H34.3288L33.9629 14.6466ZM40.478 14.6466H35.5902L37.2234 7.31485H39.1346L37.879 12.9978H40.8449L40.478 14.6466Z'
              fill='#00A650'
            />
          </g>
          <defs>
            <clipPath id='clip0_1_158'>
              <rect
                width='40'
                height='22'
                fill='white'
                transform='translate(0.984375 0.6875)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Cicatricure',
      image: '/media/item2-1.png',
      price: 63950,
      discount: '50% OFF',
      delivery: 'Envío gratis',
    },
    {
      name: 'Crema Nivea',
      image: '/media/item3-1.png',
      price: 159900,
      discount: '30% OFF',
      delivery: 'Envío gratis',
    },
    {
      name: 'Tequila',
      image: '/media/item2-2.png',
      price: 69990,
      discount: '17% OFF',
      children: (
        <svg
          width='41'
          height='23'
          viewBox='0 0 41 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_1_158)'>
            <path
              d='M3.54828 5.34607H8.67511L6.1112 9.87583H10.3844L3.54828 18.029L5.25657 12.5939H0.984375L3.54828 5.34607ZM14.8546 14.6466H12.9434L14.5766 7.31485H20.0088L19.6419 8.96363H16.12L15.8761 10.107H19.3093L18.9424 11.7558H15.4985L14.8546 14.6466ZM24.0917 14.7792C21.8146 14.7792 20.6927 13.7012 20.6927 12.1627C20.6927 12.0417 20.7258 11.789 20.7483 11.6788L21.7258 7.31485H23.6693L22.7034 11.6349C22.6917 11.6905 22.6702 11.8105 22.6702 11.9431C22.681 12.548 23.1483 13.1305 24.0917 13.1305C25.1141 13.1305 25.6361 12.4924 25.8244 11.6349L26.7912 7.31485H28.7239L27.758 11.668C27.358 13.4485 26.3805 14.7792 24.0917 14.7792ZM33.9629 14.6466H29.0751L30.7073 7.31485H32.6185L31.3629 12.9978H34.3288L33.9629 14.6466ZM40.478 14.6466H35.5902L37.2234 7.31485H39.1346L37.879 12.9978H40.8449L40.478 14.6466Z'
              fill='#00A650'
            />
          </g>
          <defs>
            <clipPath id='clip0_1_158'>
              <rect
                width='40'
                height='22'
                fill='white'
                transform='translate(0.984375 0.6875)'
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ],
};
const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const OfferSection = () => {
  const {cartItems,setCartItems}= useCartContext()
  const [currentSlide, setCurrentSlide] = useState(0);

  const addItemCart=(id:number,name: string, img:string,price:number)=>{
    

    const nuevoItem = {
      id:id,
      name: name,
      image: img,
      count:1,
      price:price,
    };
    setCartItems([...cartItems, nuevoItem]) 
    toast.success("Agregado al carrito.")
  }

  return (
    <section className='hidden w-full md:block'>
      <div className='flex w-full justify-center gap-4 pb-5 pt-12'>
        <div className='md:w-[1180px]'>
          <span className='text-2xl font-light text-section-title'>
            Ofertas
          </span>
          <span className='pl-4 pt-1.5 text-sm font-normal text-section-subtitle'>
            Ver todas
          </span>
        </div>
      </div>
      <div className='mx-[181px] '>
        <Slider {...settings}>
          {offersInfo.offers.map((offers, index) => {
            return (
              <div onClick={()=>addItemCart(index,offers.name, offers.image, offers.price)}>
              <OffersCard 
                key={index}
                name={offers.name}
                image={offers.image}
                price={offers.price}
                discount={offers.discount}
                delivery={offers.delivery}
                children={offers.children}             
              /></div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export { OfferSection };

const settingsMovil = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const OfferSectionMovil = () => {
  const {cartItems,setCartItems}= useCartContext()
  const [currentSlide, setCurrentSlide] = useState(0);

  const addItemCart=(id:number,name: string, img:string,price:number)=>{
    

    const nuevoItem = {
      id:id,
      name: name,
      image: img,
      count:1,
      price:price,
    };
    setCartItems([...cartItems, nuevoItem]) 
    toast.success("Agregado al carrito.")
  }

  return (
    <section className='w-full md:hidden'>
      <div className='flex justify-center gap-4 pb-5 pt-12'>
        <div>
          <span className='text-2xl font-light text-section-title'>
            Ofertas
          </span>
          <span className='pl-4 pt-1.5 text-sm font-normal text-section-subtitle'>
            Ver todas
          </span>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[284px]'>
          <Slider {...settingsMovil}>
            {offersInfo.offers.map((offers, index) => {
              return (
                <div onClick={()=>addItemCart(index,offers.name, offers.image, offers.price)}>
                <OffersCard
                  key={index}
                  name={offers.name}
                  image={offers.image}
                  price={offers.price}
                  discount={offers.discount}
                  delivery={offers.delivery}
                  children={offers.children}
                  
                /></div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export { OfferSectionMovil };
