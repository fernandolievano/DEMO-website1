import { poppins } from '@/utils/fonts';

const PromocionBlockText = ({ title, description }: { title: string, description: string; }) => {
  return (
    <div className={`${poppins.className} px-4 py-4`}>
      <h2 className='text-2xl lg:text-3xl text-marron-1 uppercase font-medium tracking-[6px]'>
        {title}
      </h2>
      <div className='w-full my-4 border-t border-t-naranja-2' />
      <p className='pb-4 text-sm leading-5 lg:leading-7 lg:text-lg text-marron-2'>
        {description}
      </p>
    </div>
  );
};

export default PromocionBlockText;