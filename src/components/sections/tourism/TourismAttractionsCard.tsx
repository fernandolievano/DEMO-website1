import { TourismInterface } from '@/interfaces/tourism';
import Image from 'next/image';
import Link from 'next/link';

export default function TourismAttractionsCard({ attraction }: {
  attraction: TourismInterface;
}) {
  return (
    <div className='w-full max-w-[302px] px-2 py-2 border border-gris-3'>
      <Image
        className='w-full h-[220px] object-cover object-center'
        src={attraction.cover.src}
        width={300}
        height={300}
        blurDataURL={attraction.cover.src}
        alt={`Demo Hotel - ${attraction.title}`}
      />

      <div className="flex items-center justify-start px-1 py-4 border-b border-b-gris-3">
        <h3 className='text-xl font-bold text-marron-1'>
          {attraction.title}
        </h3>
      </div>
      <div
        className='px-1 my-2 overflow-hidden text-xs line-clamp-3 text-marron-2'
      >
        {attraction.description}
      </div>

      <div className="flex justify-between px-1 pt-2 border-t justify-items-center border-t-gris-3">
        <Link href={`/tourism/${attraction.slug}`} className='w-full px-4 py-3 tracking-widest text-center text-white uppercase transition-colors bg-marron-0 hover:bg-naranja-3 hover:text-marron-1'>
          SHOW DETAILS
        </Link>
      </div>
    </div>
  );
}