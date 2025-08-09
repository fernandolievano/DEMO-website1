import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';

interface Props {
  gallery: string[];
}

const HabitacionGallery: React.FC<Props> = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { gallery } = props;

  useEffect(() => {
    console.log('thumbs: ', thumbsSwiper);
  }, [thumbsSwiper]);

  return (
    <div className='w-full px-2 py-2 mx-auto lg:py-0 lg:px-0 habitacion-gallery'>
      <div className="habitacion-gallery--main">
        <Swiper
          loop
          spaceBetween={8}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="min-h-[175px] h-full max-h-[400px] lg:min-h-full"
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className='object-cover object-center w-full h-full min-h-[175px] sm:min-h-[225px] md:min-h-[250px]'
                src={image}
                width={1600}
                height={900}
                alt='DEMO Hotel, Houses'
                loading='eager'
                quality={90}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="habitacion-gallery--thumbs">
        <Swiper
          autoHeight
          loop
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 6,
            },
          }}
          watchSlidesProgress
          modules={[Thumbs]}
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index} className='cursor-pointer'>
              <Image
                className='object-cover object-center w-full h-full'
                width={120}
                height={60}
                src={image}
                alt='DEMO Hotel, Houses'
                loading='lazy'
                quality={75}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HabitacionGallery;