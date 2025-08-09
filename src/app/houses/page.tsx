import MainHeader from '@/components/header/MainHeader';
import HabitacionesComponent from '@/components/sections/habitaciones/HabitacionesComponent';
import PromocionesComponent from '@/components/sections/promociones/PromocionesComponent';
import { mockPromotions } from '../data/promotions';
import './habitaciones.css';

export default async function Habitaciones() {

  return (
    <section>
      <MainHeader
        title='Our Houses'
        subtitle='DEMO Hotel'
        image='/images/habitaciones/header.webp'
      />

      <HabitacionesComponent
        title='Stay with us'
        paragraph='Experience comfort and tranquility in the heart of the mountains. Enjoy our cozy rooms, each designed to provide a unique and relaxing atmosphere. Whether you are here for a romantic getaway or a family vacation, we have the perfect space for you.'
      />

      {
        (mockPromotions != null) ? (
          <PromocionesComponent promotions={mockPromotions} />
        ) : (
          <h1 className='w-full py-4 text-center'>No promotions available.</h1>
        )
      }
    </section>
  );
}