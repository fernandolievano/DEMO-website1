import PromocionesComponent from '@/components/sections/promociones/PromocionesComponent';
import PromocionesHeader from '@/components/sections/promociones/PromocionesHeader';
import Contacto from '@/components/sections/contacto/Contacto';
import { mockPromotions } from '../data/promotions';


export default async function Promociones() {

  return (
    <div className="w-full min-h-screen">
      <PromocionesHeader image='/images/offers/header.webp' />

      {
        (mockPromotions != null)
          ? (
            <PromocionesComponent promotions={mockPromotions} />
          ) : (
            <h1 className='w-full py-4 text-center'>No promotions available</h1>
          )
      }

      <Contacto />
    </div>
  );
}