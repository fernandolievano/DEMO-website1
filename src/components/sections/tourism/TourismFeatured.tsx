'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { TourismInterface } from '@/interfaces/tourism';
import { poppins } from '@/utils/fonts';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './featured.css';

export default function TourismFeatured({ attractions }: {
  attractions: TourismInterface[];
}) {
  return (
    <section className='-mt-12 tourism'>
      <Swiper
        className='relative w-full h-fit tourism-carousel'
        autoHeight={false}
        autoplay={{
          delay: 5000,
        }}
        loop
        modules={[Pagination, Autoplay, Navigation]}
        navigation
        pagination={{
          el: '#tourism-featured-bullets',
          type: 'bullets',
          clickable: true,
          bulletActiveClass: 'tourism-featured-bullet--active',
          bulletClass: 'tourism-featured-bullet',
        }}
        speed={1000}
      >
        {
          attractions.map(attraction => (
            <SwiperSlide key={attraction.id}>
              {
                (attraction.cover_featured != null) ? (
                  <Image
                    className='object-cover object-center w-full h-screen sm:h-[768px] xl:h-screen'
                    src={attraction.cover_featured.src}
                    width={1366}
                    height={1024}
                    alt='tourism 1'
                    loading='lazy'
                    placeholder='blur'
                    quality={100}
                    blurDataURL={attraction.cover_featured.src}
                  />
                ) : (
                  <Image
                    className='object-cover object-center w-full h-screen sm:h-[768px] xl:h-screen'
                    src={attraction.cover.src}
                    width={1366}
                    height={1024}
                    alt='tourism 1'
                    loading='lazy'
                    placeholder='blur'
                    quality={100}
                    blurDataURL={attraction.cover.src}
                  />
                )
              }


              <div className={`absolute bottom-0 left-0 right-0 w-full pt-16 pb-24 px-8 lg:px-16 text-naranja-3 bg-opacity-50 bg-marron-1 backdrop-blur-md lg:max-w-[500px] xl:max-w-[577px] 2xl:max-w-[768px] lg:h-full lg:left-auto ${poppins.className}`}>
                <div className="w-full max-w-[300px] md:max-w-[508px] flex flex-col items-center justify-center h-full mx-auto lg:items-start">
                  <h3 className='pb-4 font-bold text-xl leading-[28px] md:text-[39px] 2xl:text-[68px] tracking-[5px] md:leading-[42px] 2xl:leading-[82px] lg:text-left text-center uppercase max-w-[600px]'>
                    {attraction.title}
                  </h3>

                  <div className='w-full h-[1px] bg-naranja-3 mx-auto mb-4' />

                  <div
                    className='relative w-full overflow-hidden text-sm leading-5 md:text-lg md:leading-8 md:mx-0 lg:px-0 line-clamp-5'
                  >
                    {attraction.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        <div id="tourism-featured-bullets" />
      </Swiper>
    </section>
  );
}