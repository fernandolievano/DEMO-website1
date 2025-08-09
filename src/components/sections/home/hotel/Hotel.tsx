import Slider from '@/components/slider/Slider';
import HomeHeading from '../HomeHeading';
import HomeSeparator from '../HomeSeparator';

const HomeHotel = () => {
  const slides: Array<{ id: number; image: string; }> = [
    {
      id: 1,
      image: '/images/home/home-demo-1.webp'
    },
    {
      id: 21,
      image: '/images/home/home-demo-2.webp'
    },
    {
      id: 3,
      image: '/images/home/home-demo-3.webp'
    },
    {
      id: 4,
      image: '/images/home/home-demo-1.webp'
    },
    {
      id: 5,
      image: '/images/home/home-demo-2.webp'
    },
    {
      id: 7,
      image: '/images/home/home-demo-3.webp'
    },
  ];
  const heading: { title: string, paragraph: string; } = {
    title: 'THE HOTEL',
    paragraph: ` <b class="tracking-[2px]">There is a place where fresh air fills your lungs, natural beauty surrounds you, and time seems to slow down</b>.
    <br/>
    DEMO Hotel is a boutique retreat designed to offer an unforgettable stay. With charming accommodations inspired by local tradition, every corner invites you to relax, disconnect, and reconnect with the world around you.
    <br/>
    Discover a unique experience in a truly one-of-a-kind setting.`
  };
  return (
    <div className='px-0 pt-16 lg:pb-12'>
      <HomeHeading title={heading.title} paragraph={heading.paragraph} />

      <div className="py-16">
        <Slider slides={slides} />
      </div>

      <HomeSeparator />
    </div>
  );
};

export default HomeHotel;