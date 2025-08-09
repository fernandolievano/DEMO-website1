'use client';

import React from 'react';
import HomeHeading from '../home/HomeHeading';
import Image from 'next/image';
import { poppins } from '@/utils/fonts';

const RestauranteComponent = ({ menu }: {
  menu?: string;
}) => {

  return (
    <section className="px-4 pt-8 pb-16 xl:pt-16">
      <HomeHeading
        title='Restaurant'
        paragraph='We believe in offering memorable experiences, and to complement your stay, our on-site restaurant brings the region’s flavors to your table. Enjoy authentic cuisine in a peaceful and welcoming setting, inspired by the local culture and natural surroundings.'
      />

      <div className="relative mt-8 pb-0 xl:mt-16 w-full max-w-[304px] min-[509px]:max-w-[462px] xl:max-w-[886px] min-[665px]:max-w-[616px] mx-auto border border-naranja-3">
        <Image
          className='object-cover object-bottom w-full h-screen max-h-[800px] md:max-h-[520px]'
          src='/images/restaurant/demo-1.webp'
          width={2560}
          height={1440}
          loading='lazy'
          alt='DEMO Hotel - Restaurant'
        />

        <div className='w-full h-full mx-auto max-w-[1200px] px-4 bottom-0 left-0 right-0 flex items-center justify-start md:absolute md:max-h-[592px]'>
          <div className={`absolute w-full max-w-[320px] h-auto bottom-0 left-0 right-0 top-auto mx-auto bg-marron-1 bg-opacity-50 backdrop-blur-sm px-4 pt-8 pb-4 md:relative md:mx-0 ${poppins.className}`}>
            <h3
              className="text-2xl text-naranja-3 uppercase font-bold tracking-[4px] text-center pb-4"
            >
              Info
            </h3>
            <div className="w-full h-[1px] bg-naranja-3" />

            <div className="relative grid grid-cols-1 row-auto gap-4 py-4 info">
              {/*  */}
              <h4 className='text-base font-bold tracking-wider text-naranja-3'>Open Hours</h4>
              <p className='flex items-center justify-start gap-2 text-sm text-white'>
                <span className='w-[16px] flex justify-center items-center'>
                  <i className="fa-solid fa-clock w-[12px]" />
                </span>
                <span>Monday to Sunday – 24 hours</span>
              </p>
              {/*  */}

              {/*  */}
              <h4 className='text-base font-bold tracking-wider text-naranja-3'>Contact</h4>
              <p className='flex items-center justify-start gap-2 text-sm text-white'>
                <span className='w-[16px] flex justify-center items-center'>
                  <i className="fa-solid fa-phone w-[12px]" />
                </span>
                <a href='#' className='transition-colors hover:text-naranja-2'>+1 234 567 8901</a>
              </p>
              <p className='flex items-center justify-start gap-2 text-sm text-white'>
                <span className='w-[16px] h-[16px] flex justify-center items-center'>
                  <i className="fa-solid fa-mobile w-[12px]" />
                </span>
                <a href='#' className='transition-colors hover:text-naranja-2'>+9 876 543 2101</a>
              </p>
              {/*  */}

              <a href='#' target='_blank' rel='noreferrer' className='absolute bottom-4 -right-8'>
                <Image
                  className='transition-all hover:scale-125'
                  src='/svg/whatsapp.svg'
                  width={46}
                  height={46}
                  alt='WhatsApp Icon'
                />
              </a>
            </div>

            <a
              className='w-full text-center h-[50px] px-4 py-3 tracking-[4px] uppercase  text-bg-main  text-naranja-3 bg-marron-1 transition-all  hover:bg-naranja-3 hover:text-marron-1 '
              style={{
                display: (menu != null) ? 'block' : 'none'
              }}
              href={menu}
              target='_blank'
              rel='noreferrer'
              download
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestauranteComponent;