import React from 'react';
import Image from 'next/image';
import './gallery.css';

export default function TourismGallery({ gallery }: { gallery: string[]; }) {
  return (
    <section className='py-8 xl:py-16'>
      <div className="w-full mx-auto max-w-[1200px] px-4 py-16">
        <div className="masonry masonry-default">
          {
            gallery.map((image, i) => (
              <div className="masonry-item" key={i}>
                <Image
                  width={800}
                  height={800}
                  src={image}
                  alt="DEMO Hotel Tourism Gallery"
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