import MainHeader from '@/components/header/MainHeader';
import Contacto from '@/components/sections/contacto/Contacto';
import NosotrosComponent from '@/components/sections/nosotros/NosotrosComponent';
import { slidesHotel, slidesCasas, slidesTourism } from '@/constants/nosotros';

import './nosotros.css';

export default function Nosotros() {
  console.log('Nosotros is rendered on the server');

  return (
    <main className="relative min-h-screen">
      <MainHeader
        image="/images/about/header.webp"
        title='About Us'
        subtitle='DEMO Hotel'
      />
      <NosotrosComponent
        slider={slidesHotel}
        title='The Hotel'
        paragraph='Discover a haven of elegance and comfort, where warm hospitality meets refined style to create an unforgettable experience.'
        buttonLink='/hotel'
      />
      <NosotrosComponent
        slider={slidesCasas}
        title='Our Houses'
        paragraph='Enjoy the serenity and charm of our houses, where comfort and privacy create a peaceful and cozy getaway.'
        buttonLink='/houses'
      />
      <NosotrosComponent
        slider={slidesTourism}
        title='Discover More'
        paragraph='Set out on a unique journey to a land of natural beauty and ancestral heritage, ready to be explored.'
        buttonLink='/tourism'
      />
      <Contacto />
    </main>
  );
}