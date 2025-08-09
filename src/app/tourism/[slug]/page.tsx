import MainHeader from '@/components/header/MainHeader';
import { notFound } from 'next/navigation';
import TourismDetails from '@/components/sections/tourism/TourismDetails';
import { tourismData } from '../../data/tourism';

export default async function TourismDetailPage({ params }: {
  params: { slug: string; };
}) {
  const attraction = tourismData.find(item => item.slug === params.slug);

  if (attraction != null) {
    return (
      <section>
        <MainHeader
          image={attraction.cover.src}
          title={attraction.title}
          subtitle='Discover amazing places with us'
        />

        <TourismDetails attraction={attraction} />
      </section>
    );
  } else {
    notFound();
  }
}