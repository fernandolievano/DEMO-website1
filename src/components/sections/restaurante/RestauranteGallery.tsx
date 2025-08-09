import React from 'react';
import HomeHeading from '../home/HomeHeading';
import Image from 'next/image';
import './gallery.css';

export default function RestauranteGallery({ gallery }: { gallery: string[]; }) {
  return (
    <section className='py-8 xl:py-16'>
      <HomeHeading
        title='Our Dishes'
        paragraph="Open to all guests, the restaurant offers a diverse menu that includes both local specialties and classic dishes, each prepared with a regional touch inspired by the surroundings. A carefully selected wine list is available to complement every meal. It's a place where tradition and flavor come together."
      />

      <div className="w-full mx-auto max-w-[1200px] px-4 py-16">
        <div className="masonry masonry-default">
          {
            gallery.map((image, i) => (
              <div className="masonry-item" key={i}>
                <Image
                  width={800}
                  height={800}
                  src={image}
                  alt="DEMO Hotel, Restaurant"
                  loading='lazy'
                  quality={100}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}