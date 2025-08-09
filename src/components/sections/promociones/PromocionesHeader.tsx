import { poppins } from '@/utils/fonts';
import FormBooking from '@/components/sections/home/header/FormBooking';
import Image from 'next/image';

const PromocionesHeader = ({ image }: { image: string; }) => {
  return (
    <header className="relative flex flex-col w-full min-h-screen lg:mb-12">
      <Image
        className='object-cover object-center w-full h-screen'
        width={1200}
        height={800}
        src={image}
        alt="Offers Header"
      />
      <div
        className=' absolute top-0 left-0 w-full h-full pt-[280px] lg:pt-[330px] flex flex-col gap-8 items-center justify-center flex-grow'
        style={{
          background: 'linear-gradient(180deg, rgba(37, 37, 37, 0.41) 40%, #252525 100%)',
        }}
      >
        <div className='px-4 text-center text-blanco-1 max-w-[400px] mx-auto w-full lg:w-[90%] lg:max-w-[1130px] '>
          <h1 className={`text-2xl lg:text-5xl lg:font-light lg:tracking-[7px] tracking-[5px] uppercase font-normal ${poppins.className}`}>
            Experience Timeless Serenity
          </h1>
          <div className="my-4 border-t border-t-naranja-1 w-[30px] mx-auto" />
          <h3 className='text-base font-normal leading-5 tracking-wide lg:text-2xl'>DEMO Hotel</h3>
        </div>

        <div className="w-[90%] max-w-fit mx-auto pt-8 lg:pt-16 pb-16">
          <FormBooking />
        </div>
      </div>
    </header>
  );
};

export default PromocionesHeader;