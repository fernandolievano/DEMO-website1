'use client';

import React, { FC } from 'react';
import PromocionesCard from './PromocionesCard';
import { SwiperSlide, Swiper } from 'swiper/react';
import { PromotionsInterface } from '@/interfaces/promotions';
import { poppins } from '@/utils/fonts';

import 'swiper/css';
import 'swiper/css/navigation';
import './promociones.css';
import Link from 'next/link';
interface Props {
  promotions: PromotionsInterface[];
}
const PromocionesComponent: FC<Props> = (props) => {
  const { promotions } = props;
  return (
    <section className="py-4 promotions">
      <header className='w-full px-4 text-center'>
        <h2
          className={`pb-4 uppercase text-2xl text-marron-2 font-normal tracking-wide ${poppins.className}`}
        >
          Special Offers
        </h2>

        <div className='pb-4 w-full max-w-[256px] md:max-w-[1168px] mx-auto border-t border-naranja-3' />
      </header>

      <div className="w-full py-4 md:py-8">
        <Swiper
          allowTouchMove
          autoHeight={false}
          slidesPerView="auto"
          spaceBetween={30}
          centeredSlides
          initialSlide={2}
          grabCursor
          watchSlidesProgress
          slideFullyVisibleClass='swiper-slide-fully-visible'
        >
          {promotions.map((promotion) => (
            <SwiperSlide key={promotion.id} className="max-w-[256px] h-[392px] relative">
              <PromocionesCard promotion={promotion} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center pt-4 pb-20">
        <Link href='/promotions' className='w-full max-w-fit px-4 py-3  mt-4 tracking-[6px] text-center uppercase transition-colors bg-transparent border border-marron-2 text-marron-2 hover:border-marron-0 hover:bg-marron-0 hover:text-main-bg'>
          View all offers
        </Link>
      </div>
    </section>
  );
};

export default PromocionesComponent;