import MainHeader from '@/components/header/MainHeader';
import RestauranteComponent from '@/components/sections/restaurante/RestauranteComponent';
import RestauranteGallery from '@/components/sections/restaurante/RestauranteGallery';
import PromocionesComponent from '@/components/sections/promociones/PromocionesComponent';
import { GALLERY_IMAGES } from '../data/restaurant';
import { mockPromotions } from '../data/promotions';

export default async function RestaurantPage() {
  const menu = { menu: '/DEMO_Hotel_Menu.pdf' };
  const gallery = GALLERY_IMAGES;

  return (
    <main className="px-0">
      <MainHeader
        image='/images/restaurant/header.webp'
        title='Warm Days, Peaceful Stays'
        subtitle='DEMO Hotel'
      />

      <RestauranteComponent menu={menu?.menu} />
      <RestauranteGallery gallery={gallery} />

      {
        (mockPromotions != null)
          ? (
            <PromocionesComponent promotions={mockPromotions} />
          ) : (
            <h1 className='w-full py-4 text-center'>No promotions available</h1>
          )
      }
    </main>
  );
}