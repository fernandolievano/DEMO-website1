/* eslint-disable react/display-name */
'use client';

import React, { FormEvent, forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import HabitacionGallery from './HabitacionGallery';
import { RoomInterface } from '@/interfaces/rooms';
import { poppins } from '@/utils/fonts';
import { addDays } from 'date-fns';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  room: RoomInterface;
}
interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  label: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ value, onClick, label }, _ref) => {
  return (
    <div className="relative mb-4 text-center transition-colors border cursor-pointer border-gris-3 hover:border-naranja-2" ref={_ref} onClick={onClick}>
      <span className="absolute top-[1px] left-[1px] flex items-center justify-center h-[calc(100%-2px)] p-4 text-sm bg-marron-0 text-naranja-3 w-[105px]">
        {label}
      </span>
      <input type="text" placeholder={value} className='w-full h-full p-4 text-center cursor-pointer bg-blanco-1 placeholder:text-center outline-naranja-3' readOnly />
      <span className="absolute top-[1px] right-[1px] flex items-center justify-center h-[calc(100%-2px)] p-4 border-l bg-blanco-1 border-gris-3 text-naranja-2">
        <i className="fa-solid fa-calendar w-[16px]" />
      </span>
    </div>
  );
});

const HabitacionComponent: React.FC<Props> = (props: Props, _ref) => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const randomizedGallery = props.room.gallery.sort(() => Math.random() - 0.5);

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    console.log('form submitted');
    event.preventDefault();
  };

  useEffect(() => {
    const getDates = async () => {
      const today = new Date();
      const tomorrow = addDays(today, 1);

      setCheckIn(today);
      setCheckOut(tomorrow);
    };

    getDates().then(() => {
      console.log('dates set');
    }).catch((e) => {
      console.error('error getting time', e);
    });

  }, []);

  return (
    <section className='mx-auto w-full max-w-[500px] lg:max-w-[1200px] px-4 py-8 lg:pb-0'>
      <div className="flex flex-col items-start w-full gap-4 lg:flex-row lg:items-stretch">
        <div className="w-full lg:max-w-[calc(100%-450px)] p-0 overflow-hidden">
          <HabitacionGallery gallery={randomizedGallery} />
        </div>

        <div className="grid w-full grid-cols-1 row-auto gap-2 lg:max-w-[500px] lg:border-l lg:border-naranja-3 lg:pl-4">
          <div id="room-services" className='flex flex-col gap-3 pt-2 border-t border-naranja-3'>
            {
              props.room.services.map((service, index) => (
                <p className="flex items-center justify-start gap-2 pb-3 border-b border-naranja-3 text-marron-1" key={index}>
                  <span className='px-1'>
                    <Image
                      className='object-contain object-center w-5 h-5'
                      src={service.iconPath}
                      alt={service.name}
                      width={24}
                      height={24}
                    />
                  </span>
                  <span className='px-2 border-l border-naranja-2'>
                    {service.name}
                  </span>
                </p>
              ))
            }
          </div>


          <p className={`text-sm text-left text-marron-1 py-6 lg:hidden leading-5 ${poppins.className}`}>
            {props.room.longDescription}
          </p>

          <form className="flex flex-col w-full py-6 overflow-hidden font-normal border-t border-naranja-3 font-inter lg:border-none lg:pb-0" onSubmit={handleForm}>

            <DatePicker
              selected={checkIn}
              onChange={(date: Date) => setCheckIn(date)}
              customInput={<CustomInput label='Check-in' />}
              locale="es"
              dateFormat="dd/MM/yyyy"
              placeholderText='Check-in'
            />

            <DatePicker
              selected={checkOut}
              onChange={(date: Date) => setCheckOut(date)}
              customInput={<CustomInput label='Check-out' />}
              locale="es"
              dateFormat="dd/MM/yyyy"
              placeholderText='Check-out'
            />

            <button className='px-4 py-4 tracking-[5px] text-center uppercase transition-colors bg-marron-0 text-blanco-1 hover:bg-naranja-3 hover:text-marron-1'>
              Book now
            </button>
          </form>
        </div>
      </div>
      {/*  */}
      <p
        className={`text-sm text-left text-marron-1 hidden pt-4 lg:mt-4 lg:border-t lg:border-t-naranja-3 lg:block leading-5 ${poppins.className}`}
      >
        {props.room.longDescription}
      </p>
    </section>
  );
};

export default HabitacionComponent;