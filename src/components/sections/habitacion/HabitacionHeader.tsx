import { poppins } from '@/utils/fonts';
import { PropsWithChildren } from 'react';

interface Props {
  image: string;
  title: string;
}

const HabitacionHeader = (props: PropsWithChildren<Props>) => {
  return (
    <header
      className='relative w-full h-[430px] lg:h-[520px] max-h-screen px-0 py-0 bg-center bg-no-repeat bg-cover lg:mb-12'
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div
        className='top-0 left-0 w-full h-full lg:pt-[120px] flex flex-col gap-8 items-center justify-center flex-grow absolute'
        style={{
          background: 'linear-gradient(180deg, rgba(37, 37, 37, 0.41) 0%, #252525 100%)',
        }}
      >
        <div className='px-4 text-center text-blanco-1 max-w-[400px] mx-auto w-full lg:w-[90%] lg:max-w-[1130px] '>
          <h1 className={`text-2xl lg:text-5xl font-light lg:tracking-[7px] tracking-[5px] uppercase ${poppins.className}`}>
            Boutique House <strong className='font-bold'>{props.title}</strong>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default HabitacionHeader;