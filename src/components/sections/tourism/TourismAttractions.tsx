'use client';

import { TourismInterface } from '@/interfaces/tourism';
import TourismAttractionsCard from './TourismAttractionsCard';
import HomeHeading from '../home/HomeHeading';

import { SwiperSlide, Swiper } from 'swiper/react';

import './attractions.css';

export default function TourismAttractions({ attractions }: {
  attractions: TourismInterface[];
}) {
  return (
    <section className='px-4 py-16 tourism-attractions'>
      <HomeHeading title='Experiences & Traditions' paragraph='Discover the most remarkable dates and enjoy each season at its best.' />

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
          {
            attractions.map((attraction, i) => (
              <SwiperSlide key={`${attraction.id}-${i}`} className='max-w-[302px]'>
                <TourismAttractionsCard attraction={attraction} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

    </section>
  );
}