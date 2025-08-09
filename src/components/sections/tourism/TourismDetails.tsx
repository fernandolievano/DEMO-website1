'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { poppins } from '@/utils/fonts';
import HomeHeading from '@/components/sections/home/HomeHeading';
import { TourismInterface } from '@/interfaces/tourism';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './details.css';
import Image from 'next/image';


const TourismDetails = ({ attraction }: { attraction: TourismInterface; }) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const getDirection = () => {
    if (typeof window !== 'undefined') {
      const direction = window.innerWidth <= 1024 ? 'horizontal' : 'vertical';

      return direction;
    }

    return 'horizontal';
  };
  const handleThumbsResize = (swiper: SwiperType) => {
    swiper.changeDirection(getDirection());
  };
  const galleryImages = attraction.gallery.slice(0, 4);

  useEffect(() => {
    console.log('thumbs: ', thumbsSwiper);
  }, [thumbsSwiper]);

  return (
    <div className='pb-8 md:py-16 tourism-detail'>
      <div className="w-full mx-auto max-w-[1200px] px-4">
        <div className="w-full h-[1px] my-8 md:hidden bg-gris-3" />
        <HomeHeading title={`ABOUT ${attraction.title}`} />

        <div
          className={`w-fit max-w-[744px] mx-auto py-4 lg:text-center text-marron-1 text-sm leading-5 lg:text-base lg:leading-6 ${poppins.className}`}
        >
          {attraction.description}
        </div>

        <div className="py-8 tourism-detail-gallery">
          <div className="tourism-detail-gallery--full">
            <Swiper
              loop
              spaceBetween={8}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              autoHeight={false}
            >
              {
                galleryImages.map((image, i) => (
                  <SwiperSlide
                    key={i}
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  >
                    <Image src={image.src}
                      className='object-cover w-full h-full max-h-[560px]'
                      width={1280}
                      height={720}
                      alt={`DEMO Hotel - ${attraction.title}`}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className='tourism-detail-gallery--thumbs'>
            <Swiper
              onSwiper={setThumbsSwiper}
              direction={getDirection()}
              onResize={handleThumbsResize}
              spaceBetween={16}
              slidesPerView='auto'
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Navigation, Thumbs]}
              autoHeight={false}
              className="mySwiper"
            >
              {
                galleryImages.map((image, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={image.src}
                      className='object-cover w-[86px] h-[86px] md:w-[128px] md:h-[128px] xl:w-[162px]'
                      width={360}
                      height={360}
                      alt={`Demo Hotel - ${attraction.title}`}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div >
  );
};

export default TourismDetails;