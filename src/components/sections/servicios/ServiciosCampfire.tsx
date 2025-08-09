import Image from 'next/image';

const ServiciosCampfire = () => {

  return (
    <section className="px-4 py-8 servicios-campfire xl:py-16">
      <div className="border border-naranja-3 w-full max-w-[304px] min-[509px]:max-w-[462px] xl:max-w-[886px] min-[665px]:max-w-[616px] mx-auto bg-main-bg">
        <div className="relative w-full h-auto overflow-hidden">
          <Image
            className='object-cover object-center w-full max-h-[420px]'
            src='/images/services/campfire.webp'
            width={886}
            height={328}
            alt='Campfire'
            loading='lazy'
            quality={90}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full px-4 py-6 mx-auto sm:px-8 sm:w-[95%]">
          <Image
            className='xl:w-9'
            src="/images/icons/services-bonfire.svg"
            width={26}
            height={28}
            alt='bonfire icon'
          />

          <h3 className='py-4 xl:text-[28px] xl:tracking-[5px] leading-8 tracking-widest text-center uppercase text-marron-1'>Friendship Bonfire</h3>

          <div className="w-full h-[1px] my-1 bg-naranja-3" />

          <p className='py-4 leading-7 text-center xl:text-lg text-marron-2'>
            Share stories around the bonfire — a space for camaraderie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiciosCampfire;