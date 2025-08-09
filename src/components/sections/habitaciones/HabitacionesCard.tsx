'use client';

import React, { FC, useCallback, useEffect, useState } from 'react';
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

const HabitacionesCard: FC<Props> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const setCardHeight = useCallback((openOrClose = true) => {
    const contentBox = document.getElementById(props.id) as HTMLElement;

    if (openOrClose) {
      contentBox.style.height = `317px`;
    } else {
      contentBox.style.height = `238px`;
    }
  }, [props.id]);
  const expandCard = (openOrClose: boolean) => {
    setIsExpanded(openOrClose);
    setCardHeight(openOrClose);
  };

  useEffect(() => {
    setCardHeight(false);
  }, [setCardHeight]);

  return (
    <div className={`habitaciones-card flex flex-col gap-1 overflow-hidden border h-[385px] w-full max-w-[328px] relative transition-all ${props.isFeatured ? 'border-oro' : 'border-gris-3'}`} >
      <Image
        className='w-full h-[144px] object-cover z-0'
        src={props.imagePath}
        width={328}
        height={144}
        alt='House Image'
      />
      {
        props.isFeatured ? (
          <div className="habitaciones-card--featured-cover" />
        ) : ''
      }

      <div className={`${isExpanded ? 'habitaciones-card--open' : 'habitaciones-card--closed'}  z-10 px-3 flex flex-col justify-start transition-all bg-blanco-2 absolute bottom-0 duration-500`} id={props.id}>
        <button className={`${isExpanded ? 'visible' : 'invisible'} flex items-center justify-center w-6 h-6 border rounded-full shadow border-naranja-2 text-naranja-2 absolute inset-0 bottom-auto top-[-12px] mx-auto z-20 bg-blanco-2 transition-all`} onClick={() => expandCard(false)}>
          <i className="fa-solid fa-chevron-down w-[12px]" />
        </button>

        <div className="relative flex items-center justify-between gap-2 py-4 border-b border-naranja-3">
          <h3 className={`text-[21px] text-marron-1 ${poppins.className}`}>
            Boutique House <b>{props.name}</b>
          </h3>
          <div className="flex gap-2 ">
            <Image
              src='/images/icons/persons.svg'
              width={21}
              height={21}
              alt='Icono personas'
            />
            <span className="pl-2 border-l border-l-naranja-3">
              {props.persons}
            </span>
          </div>

          <button className={`${!isExpanded ? 'visible' : 'invisible'} flex items-center justify-center w-6 h-6 border rounded-full shadow border-naranja-2 text-naranja-2 absolute inset-0 top-auto bottom-[-12px] mx-auto bg-blanco-2`} onClick={() => expandCard(true)}>
            <i className="fa-solid fa-chevron-up w-[12px]" />
          </button>
        </div>
        <p className={`my-4 mb-0 text-sm text-marron-2 overflow-hidden ${isExpanded ? 'line-clamp-[7]' : 'line-clamp-3'} ${poppins.className}`} >
          {
            isExpanded ? props.longDescription : props.shortDescription
          }
        </p>

        <div className="absolute inset-0 top-auto flex items-center justify-center py-4 mt-auto bg-blanco-2 border-t border-naranja-3 w-[calc(100%-24px)] mx-auto">
          <Link className={`w-full px-4 py-3 tracking-widest text-center uppercase border transition-colors ${props.isFeatured ? 'bg-oro text-blanco-2 ' : 'text-main-bg border-marron-1 bg-marron-1'} hover:text-main-bg hover:bg-marron-0`} href={props.url} >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HabitacionesCard;