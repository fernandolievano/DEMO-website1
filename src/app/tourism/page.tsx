import PromocionesHeader from '@/components/sections/promociones/PromocionesHeader';
import TourismFeatured from '@/components/sections/tourism/TourismFeatured';
import TourismAttractions from '@/components/sections/tourism/TourismAttractions';
import TourismGallery from '@/components/sections/tourism/TourismGallery';
import { TourismInterface } from '@/interfaces/tourism';
import { tourismData, tourismGallery } from '../data/tourism';


export default async function TourismPage() {
  const featuredAttractions = tourismData.filter(attraction => !!attraction.featured);
  const attractions = tourismData;

  let loopedAttractions: TourismInterface[] = [];

  if (attractions != null) {
    const attractionsLenght = attractions.length;
    loopedAttractions = Array.from({ length: (attractionsLenght * 3) }, (_, i) => attractions[i % attractions?.length]);
  }


  return (
    <main className='px-0'>
      <PromocionesHeader image='/images/tourism/header.webp' />

      {
        (featuredAttractions != null) ? (
          <TourismFeatured attractions={featuredAttractions} />
        ) : (<div className='invisible hidden' />)
      }

      {
        (attractions != null) ? (
          <TourismAttractions attractions={loopedAttractions} />
        ) : (<div className='invisible hidden' />)
      }

      {
        (tourismGallery != null) ? (
          <TourismGallery gallery={tourismGallery} />
        ) : (
          <p>no hay imagenes para ver</p>
        )
      }
    </main>
  );
}