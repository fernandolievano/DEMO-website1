import { poppins } from '@/utils/fonts';
import { PropsWithChildren } from 'react';

interface Props {
  image: string;
  title: string;
  subtitle?: string;
}

const MainHeader = (props: PropsWithChildren<Props>) => {
  return (
    <header
      className='relative w-full min-h-screen px-0 py-0 bg-center bg-no-repeat bg-cover lg:mb-12'
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div
        className='top-0 left-0 w-full h-full pt-[280px] lg:pt-[330px] flex flex-col gap-8 items-center justify-center flex-grow absolute'
        style={{
          background: 'linear-gradient(180deg, rgba(37, 37, 37, 0.41) 0%, #252525 100%)',
        }}
      >
        <div className='px-4 text-center text-blanco-1 max-w-[400px] mx-auto w-full lg:w-[90%] lg:max-w-[1130px] '>
          <h1 className={`text-2xl lg:text-5xl lg:font-light lg:tracking-[7px] tracking-[5px] uppercase font-normal ${poppins.className}`}>
            {props.title}
          </h1>
          <div className="my-4 border-t border-t-naranja-1 w-[30px] mx-auto" />
          <h3 className='text-base font-normal leading-5 tracking-wide lg:text-2xl'>
            {props.subtitle}
          </h3>
        </div>

        <div className="w-full pt-8 pb-16 mx-auto lg:pt-16">
          <div className="h-[204px] lg:h-[76px] p-3 bg-transparent">
            {/* needed to preserve the alignment between pages */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;