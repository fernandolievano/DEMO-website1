import MainHeader from '@/components/header/MainHeader';
import Contacto from '@/components/sections/contacto/Contacto';
import HabitacionesSlider from '@/components/slider/HabitacionesSlider';
import ServiciosComponent from '@/components/sections/servicios/ServiciosComponent';
import ServiciosCampfire from '@/components/sections/servicios/ServiciosCampfire';
import PromocionesComponent from '@/components/sections/promociones/PromocionesComponent';
import { mockPromotions } from '../data/promotions';

export default async function Servicios() {

  return (
    <div className="relative min-h-screen servicios">
      <MainHeader
        title='Our Services'
        subtitle='DEMO Hotel'
        image='/images/services/header.webp'
      />
      <ServiciosCampfire />
      <ServiciosComponent />
      <HabitacionesSlider />
      {
        (mockPromotions != null)
          ? (
            <PromocionesComponent promotions={mockPromotions} />
          ) : (
            <h1 className='w-full py-4 text-center'>No promotions available.</h1>
          )
      }
      <Contacto />
    </div>
  );
}