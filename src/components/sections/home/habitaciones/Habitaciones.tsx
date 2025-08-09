/* eslint-disable @next/next/no-img-element */
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './habitaciones.css';
// import { poppins } from '@/utils/fonts';
import HomeSeparator from '../HomeSeparator';
import { rooms } from '@/app/data/rooms';
import { poppins } from '@/utils/fonts';
import Link from 'next/link';

const HomeHabitaciones = () => {

  return <section className='px-0 pt-16 lg:pb-12 habitaciones'>
    <Swiper
      className='relative mb-16'
      allowTouchMove={false}
      autoHeight={false}
      slidesPerView={1}
      breakpoints={{
        1024: {
          slidesPerView: 'auto',
        },
      }}
      spaceBetween={0}
      centeredSlides
      loop
      autoplay
      initialSlide={0}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{
        el: '#homeRoomPagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass: 'habitaciones-custom-bullet--active',
        bulletClass: 'habitaciones-custom-bullet',
      }}
    >
      {rooms.slice(0, 6).map((room, i) => (
        <SwiperSlide key={i}>
          <div className="w-full p-0">
            <div
              className="relative z-0 w-full px-4 pt-4 pb-0 bg-center bg-no-repeat bg-cover sm:pt-8 sm:px-8 lg:h-full lg:p-0"
              style={{
                backgroundImage: `url(${room.imagePath})`
              }}
            >
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-white bg-opacity-70 lg:hidden" />
              <img
                src={room.imagePath}
                alt='placeholder'
              />

            </div>
            {/*  */}
            <div className="bottom-0 w-full px-4 pt-0 pb-4 sm:px-8 sm:pb-8 lg:absolute lg:p-0">
              <div className="flex flex-col items-center justify-center w-full gap-4 px-4 py-4 bg-white text-marron-1 md:px-8 md:py-8 lg:flex-row lg:bg-marron-1 lg:bg-opacity-50 lg:text-white lg:backdrop-blur-md lg:gap-8">
                <div className="flex items-center justify-around gap-4 pb-4 border-b justify-items-center border-naranja-3 w-full max-w-[600px] mx-auto lg:border-b-0 lg:pb-0 lg:gap-8">
                  <h4
                    className={`w-1/2 font-normal text-[19px] leading-7 text-left sm:text-center lg:text-left ${poppins.className}`}
                  >
                    Boutique House
                  </h4>

                  <div className="w-[1px] border-r border-naranja-3  h-[40px] lg:h-[75px]" />

                  <h3 className="font-bold text-center text-[40px] leading-[48px] w-1/2">
                    {room.name}
                  </h3>
                </div>
                <div className="hidden lg:block w-[1px] border-r border-naranja-3  h-[40px] lg:h-[75px]" />
                <div className={`my-4 text-sm line-clamp-3 overflow-hidden w-full max-w-[600px] mx-auto ${poppins.className}`} dangerouslySetInnerHTML={{ __html: room.longDescription }} />
                <div className="hidden lg:block w-[1px] border-r border-naranja-3  h-[40px] lg:h-[75px]" />
                <div className="flex items-center justify-center py-4">
                  <Link href={`/houses/${room.id}`} className='w-[200px] px-4 py-3 tracking-[6px] font-bold text-center uppercase transition-colors bg-transparent border border-marron-1 hover:bg-marron-1 hover:text-white p-y lg:border-white lg:hover:border-marron-1' aria-label="Explore this house">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div id="homeRoomPagination" />
    </Swiper>

    <HomeSeparator />
  </section>;
};

export default HomeHabitaciones;