import Link from 'next/link';
import ServiciosGrid from './ServiciosGrid';
import HomeSeparator from '@/components/sections/home/HomeSeparator';
import SectionTitleOne from '../SectionTitleOne';

const ServiciosComponent = () => {
  const heading: { title: string, paragraph: string; } = {
    title: 'SERVICES',
    paragraph: `Discover a space where nature and comfort meet. With carefully designed services and attention to every detail, we make your stay effortless and enjoyable.`
  };
  return (
    <section className="pt-16 lg:pb-12">
      <SectionTitleOne
        title={heading.title}
        paragraph={heading.paragraph}
        paragraphClassname='hidden lg:block'
      />

      <div className="py-8 lg:py-16">
        <ServiciosGrid />
      </div>

      <div className="flex items-center justify-center pt-4 pb-20">
        <Link href='/services' className='w-full max-w-fit px-4 py-3  mt-4 tracking-[6px] text-center uppercase transition-colors bg-transparent border border-marron-0 text-marron-0 hover:border-marron-0 hover:bg-marron-0 hover:text-main-bg'>
          View all services
        </Link>
      </div>

      <HomeSeparator />
    </section>
  );
};

export default ServiciosComponent;