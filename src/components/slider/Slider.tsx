/* eslint-disable @next/next/no-img-element */

'use client';

import { PropsWithChildren } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { SlideInterface } from '@/interfaces/slider';

import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css';
import Link from 'next/link';

interface Props {
  slides: SlideInterface[];
  hasButton?: boolean;
  buttonLink?: string;
}

const Slider = (props: PropsWithChildren<Props>) => {
  return (
    <div className="carousel slider">
      <Swiper
        allowTouchMove={false}
        autoHeight={false}
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides
        loop
        autoplay
        initialSlide={2}
        modules={[Navigation, Autoplay]}
        navigation
      >
        {props.slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt='placeholder' />
          </SwiperSlide>
        ))}

        {
          ((props.hasButton ?? false) && (typeof props.buttonLink === 'string')) && (
            <Link href={props.buttonLink} className='w-full text-center max-w-[192px] h-[50px] px-4 py-3 tracking-[4px] uppercase border text-bg-main border-bg-main-bg text-main-bg backdrop-blur-md absolute inset-x-0 bottom-8 sm:bottom-4 top-auto mx-auto  z-10 font-bold transition-all hover:backdrop-blur-0 hover:border-marron-0 hover:bg-marron-0 hover:text-main-bg'>
              SEE MORE
            </Link>
          )
        }
      </Swiper>
    </div>
  );
};

export default Slider;