'use client';

import { FormEvent, forwardRef, useEffect, useState } from 'react';
import { addDays } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  label: string;
}

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(({ value, onClick, label }, ref) => {
  return (
    <button onClick={onClick} ref={ref} type='button' className='flex items-stretch w-auto p-0 text-lg bg-white border-none shadow-none outline-none booking-buttons text-marron-1 mb-3 lg:mb-0 lg:mr-3 min-w-[250px] lg:min-w-[150px] h-[52px]' title={label}>
      <span className='flex items-center px-4 py-3 transition-colors booking-buttons-icon bg-marron-1 text-naranja-3'>
        <i className="fa-solid fa-calendar w-[16px]" />
      </span>
      <span className='flex items-center justify-center w-full px-4 py-3 border'>{value}</span>
    </button>
  );
});

CustomInput.displayName = 'CustomInput';

const FormBooking = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info('📅 You Clicked the Booking Form!');
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
    <form className="flex flex-col items-center justify-center w-full gap-0 p-3 text-white lg:flex-row backdrop-blur-lg"
      onSubmit={handleForm}>
      <DatePicker
        selected={checkIn}
        onChange={(date: Date) => setCheckIn(date)}
        customInput={<CustomInput label='Check-in' />}
        locale="en"
        dateFormat="dd/MM/yyyy"
        placeholderText='Check-in'
      />
      <DatePicker
        selected={checkOut}
        onChange={(date: Date) => setCheckOut(date)}
        customInput={<CustomInput label='Check-out' />}
        locale="en"
        dateFormat="dd/MM/yyyy"
        placeholderText='Check-out'
      />
      <button className='w-full lg:max-w-[168px] h-[52px] py-3 px-4 font-medium tracking-[2px] uppercase text-lg transition-colors bg-marron-1 text-naranja-3 hover:bg-marron-2'>
        Book Now
      </button>
    </form>
  );
};

export default FormBooking;