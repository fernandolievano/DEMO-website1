'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { poppins } from '@/utils/fonts';

interface Props {
  id: string;
  name: string;
  imagePath: string;
  shortDescription: string;
  longDescription: string;
  url: string;
  isFeatured: boolean;
  persons: number;
}

const HabitacionMinCard: React.FC<Props> = (props) => {

  return (
    <div className={`habitaciones-card overflow-hidden border w-full h-full max-w-[328px] relative transition-all ${props.isFeatured ? 'border-oro' : 'border-gris-3'} bg-blanco-2`} >
      <Image
        className='w-full h-[144px] object-cover z-0'
        src={props.imagePath}
        width={328}
        height={144}
        alt='Demo Hotel'
      />
      {
        props.isFeatured ? (
          <div className="habitaciones-card--featured-cover" />
        ) : ''
      }

      <div className="flex flex-col justify-between h-[calc(100%-144px)] px-3" id={props.id}>

        <div className="relative flex items-center justify-between gap-2 py-4 border-b-0 lg:border-b border-naranja-3">
          <h3 className={`text-[21px] text-marron-1 ${poppins.className}`}>
            Boutique House <b>{props.name}</b>
          </h3>
          <div className="invisible hidden gap-2 lg:flex lg:visible">
            <Image
              src='/images/icons/persons.svg'
              width={21}
              height={21}
              alt='Icon person'
            />
            <span className="pl-2 border-l border-l-naranja-3">
              {props.persons}
            </span>
          </div>
          <Link className={`${props.isFeatured ? 'border-oro text-oro hover:bg-oro' : ' border-marron-1 text-marron-1 hover:bg-marron-1'} bg-transparent border transition-colors py-3 px-4 uppercase tracking-wider hover:text-main-bg lg:hidden lg:invisible`} href={props.url}>
            Go
          </Link>
        </div>
        <p className='hidden my-4 overflow-hidden text-sm text-marron-2 lg:block line-clamp-3'>
          {props.shortDescription}
        </p>

        <div className="items-center justify-center invisible hidden w-full py-4 mb-0 lg:visible lg:flex lg:border-t lg:border-naranja-3">
          <Link className={`w-full px-4 py-3 tracking-widest text-center uppercase border transition-colors ${props.isFeatured ? 'bg-oro text-blanco-2 ' : 'text-main-bg border-marron-1 bg-marron-1'} hover:text-main-bg hover:bg-marron-0`} href={props.url} >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HabitacionMinCard;