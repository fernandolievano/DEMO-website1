import HomeHeading from '../HomeHeading';
import Slider from '@/components/slider/Slider';
import HomeSeparator from '../HomeSeparator';
import Link from 'next/link';

const HomeRestaurante = () => {
  const slides: Array<{ id: number; image: string; }> = [
    {
      id: 1,
      image: '/images/home/home-demo-4.webp'
    },
    {
      id: 21,
      image: '/images/home/home-demo-5.webp'
    },
    {
      id: 3,
      image: '/images/home/home-demo-6.webp'
    },
    {
      id: 4,
      image: '/images/home/home-demo-4.webp'
    },
    {
      id: 5,
      image: '/images/home/home-demo-5.webp'
    },
    {
      id: 7,
      image: '/images/home/home-demo-6.webp'
    },
  ];

  const heading: { title: string, paragraph: string; } = {
    title: 'Restaurant',
    paragraph: `Our restaurant offers a refined gourmet experience that blends regional flavors with modern high-end cuisine — all paired with carefully selected local wines.`
  };

  return (
    <section className="px-0 pt-16 lg:pb-12">
      <HomeHeading title={heading.title} paragraph={heading.paragraph} />

      <div className="relative py-16">
        <Slider slides={slides} />

        <Link href='/restaurant' className='w-full text-center max-w-[192px] px-4 py-3 tracking-[6px] uppercase border text-main-bg border-main-bg backdrop-blur-md absolute inset-x-0 bottom-24 top-auto mx-auto z-10 font-bold transition-all hover:backdrop-blur-0 hover:border-marron-0 hover:bg-marron-0'>
          View Menu
        </Link>
      </div>

      <HomeSeparator />
    </section>
  );
};

export default HomeRestaurante;