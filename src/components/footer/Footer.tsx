import Image from 'next/image';
import { SMLinksInterface } from '@/interfaces/footer';

const Footer = () => {
  const socialMediaLinks: SMLinksInterface[] = [
    {
      name: 'facebook',
      iconPath: '/images/icons/facebook.png',
      href: ''
    },
    {
      name: 'instagram',
      iconPath: '/images/icons/instagram.png',
      href: ''
    },
    {
      name: 'tripadvisor',
      iconPath: '/images/icons/tripadvisor.png',
      href: ''
    },
  ];
  return (
    <footer className='w-full px-6 pt-0 pb-10 mt-auto text-white bg-negro-1'>
      <div className="flex flex-col lg:flex-row lg:gap-14  justify-center w-full max-w-[480px] lg:max-w-[1024px] lg:justify-between mx-auto pb-12">
        <div className="flex items-center justify-center pt-12 pb-8 lg:pb-0 lg:min-h-full lg:w-1/3 lg:border-r lg:border-r-negro-2">
          <Image src="/images/logo-navbar.png" width={120} height={50} alt='LOGO DEMO HOTEL' className='block' />
        </div>
        {/*  */}
        <div className="w-full py-1 lg:pt-24 pb lg:w-1/3">
          <h2 className="pb-2 mb-3 tracking-[0.2em] uppercase border-b border-b-negro-2 text-n2">Phone</h2>
          <p className='flex items-center gap-2 pb-3 mb-3 text-sm font-normal leading-3 tracking-wide transition-colors border-b border-b-negro-2 hover:text-naranja-2'>
            <i className="fa-solid fa-mobile w-[12px]" />
            <a href="tel:+1 234 567 8901">
              +1 234 567 8901
            </a>
          </p>
        </div>
        {/*  */}
        <div className="w-full py-1 lg:pt-24 lg:w-1/3">
          <h2 className="pb-2 mb-3 tracking-[0.2em] uppercase border-b border-b-negro-2 text-n2">EMAIL</h2>
          <p className='flex items-center gap-2 pb-3 mb-3 text-sm font-normal leading-3 tracking-wide transition-colors border-b border-b-negro-2 hover:text-naranja-2'>
            <i className="fa-solid fa-envelope w-[16px]" />
            <a href="mailto:booking@demohotel.com">
              booking@demohotel.com
            </a>
          </p>
          <div className="flex items-center justify-start gap-2 py-2">
            {
              socialMediaLinks.map(({ name, iconPath, href }) => (
                <a className='transition-all' key={name} href={href} target="_blank" rel="noopener noreferrer">
                  <Image src={iconPath} width={24} height={24} alt={name} className='transition-all hover:translate-y-1' />
                </a>
              ))
            }
          </div>
        </div>
        {/*  */}
      </div>

      <div className="w-full max-w-[312px] lg:max-w-[100%] lg:text-center pt-16 pb-0 mx-auto">
        <p className='text-xs text-gris-1'>© 2024 DEMO Hotel | coded by <a className='underline transition-colors hover:text-naranja-3 lg:no-underline' href="https://fernandolievano.netlify.app" target="_blank" rel="noopener noreferrer">Fernando Liévano</a></p>
      </div>
    </footer>
  );
};

export default Footer;