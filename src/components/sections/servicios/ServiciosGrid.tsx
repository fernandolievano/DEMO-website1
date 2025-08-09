import Image from 'next/image';
import { services } from '@/app/data/services';

const ServiciosGrid = () => {
  return (
    <div className="w-full max-w-[480px] md:max-w-[768px]  xl:max-w-[1366px] px-4 mx-auto">
      <div className="flex flex-wrap justify-center w-full gap-2 xl:gap-6">
        {
          services.map(service => (
            <div className="w-[148px] py-4 px-2 border border-naranja-2 flex flex-col justify-start items-center" key={service.title}>
              <Image
                className='object-contain mx-auto h-[40px] w-[40px]'
                width={40}
                height={40}
                loading='lazy'
                src={service.iconPath}
                alt='icono servicio'
              />

              <div className="w-[95px] my-4 mx-auto border-t border-naranja-3" />

              <h4 className='flex items-center justify-center flex-auto text-sm leading-4 text-center uppercase text-marron-1' dangerouslySetInnerHTML={{ __html: service.title }} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ServiciosGrid;