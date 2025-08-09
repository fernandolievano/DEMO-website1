'use client';

/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PromotionsInterface } from '@/interfaces/promotions';
import { poppins } from '@/utils/fonts';

interface Props {
  promotion: PromotionsInterface;
}

const PromocionesCard: FC<Props> = (props) => {
  const { promotion } = props;

  const setFallbackImage = (id: string) => {
    const image = document.getElementById(id) as HTMLImageElement;
    image.src = '/images/image-error.png';
    image.className = 'object-contain object-top h-full py-4';

    console.log('image not loaded: ', id);
  };

  return (
    <div className="w-full h-[392px] relative overflow-hidden">
      <Image
        className='object-cover h-full'
        fill
        quality={100}
        src={`${promotion.cover.full}`}
        alt={promotion.title}
        loading='lazy'
        id={`${promotion.id}-img`}
        onError={() => setFallbackImage(`${promotion.id}-img`)}
      />
      <div className="absolute bottom-0 left-0 text-white h-[155px] w-full backdrop-blur-md bg-blanco-1 bg-opacity-5 px-4 py-4 flex flex-col items-center justify-between transition-all hover:h-[240px] duration-500 group">
        <h4 className={`w-full text-left leading-7 font-medium tracking-wider uppercase ${poppins.className}`}>{promotion.title}</h4>

        <p className='text-sm leading-6 h-0 group-hover:h-[70px] overflow-hidden text-ellipsis line-clamp-3 duration-500 transition-all relative opacity-0 group-hover:opacity-100'>
          {promotion.description}
        </p>

        <Link href={`/offers/${promotion.slug}`} className='w-full px-4 py-3 mt-4 font-bold tracking-[4px] text-center uppercase transition-colors bg-transparent border border-main-bg text-main-bg hover:border-marron-0 hover:bg-marron-0 hover:text-main-bg backdrop-blur-md'>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PromocionesCard;