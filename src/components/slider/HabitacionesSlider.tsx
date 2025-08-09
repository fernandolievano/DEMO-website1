'use client';

import React from 'react';
import Link from 'next/link';
import { SwiperSlide, Swiper } from 'swiper/react';
import HomeHeading from '@/components/sections/home/HomeHeading';
import HabitacionesCard from '@/components/sections/habitaciones/HabitacionesCard';
import { rooms } from '@/app/data/rooms';

import './habitaciones-slider.css';


const HabitacionesSlider = () => {
  return (
    <div className='pt-12 pb-4 habitaciones-slider'>
      <HomeHeading title='Our Houses' />

      <div className="py-4 md:py-8">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          loop
          centeredSlides
          grabCursor
          watchSlidesProgress
          slideFullyVisibleClass='swiper-slide-fully-visible'
        >
          {rooms.map((room, i) => (
            <SwiperSlide key={i} className='h-[385px] max-w-[328px]'>
              <HabitacionesCard
                id={room.id}
                imagePath={room.imagePath}
                name={room.name}
                isFeatured={room.isFeatured}
                shortDescription={room.shortDescription}
                longDescription={room.longDescription}
                url={room.url}
                persons={room.persons}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center pt-4 pb-20">
        <Link href='/habitaciones' className='w-full max-w-fit px-4 py-3  mt-4 tracking-[6px] text-center uppercase transition-colors bg-transparent border border-marron-0 text-marron-0 hover:border-marron-0 hover:bg-marron-0 hover:text-main-bg'>
          View all houses
        </Link>
      </div>
    </div>
  );
};

export default HabitacionesSlider;