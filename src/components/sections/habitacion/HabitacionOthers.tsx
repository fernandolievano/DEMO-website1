import React from 'react';
import { rooms } from '@/app/data/rooms';
import { poppins } from '@/utils/fonts';
import HabitacionMinCard from './HabitacionMinCard';

interface Props {
  currentId: string;
}

const HabitacionOhters: React.FC<Props> = (props) => {

  return (
    <div className='mx-auto w-full max-w-[500px] lg:max-w-[1200px] px-4 py-8'>
      <header className='py-8'>
        <h2 className={`px-4 pb-4 text-marron-1 uppercase font-medium tracking-[5px] text-2xl text-center lg:text-4xl lg:tracking-[18px] ${poppins.className}`}>
          Explore more stays
        </h2>
        <div className="max-w-[220px] lg:max-w-full w-full mx-auto border-t border-naranja-3" />
      </header>

      <div className="flex flex-col flex-wrap items-center justify-center gap-8 lg:items-stretch md:flex-row md:py-8 xl:py-16">
        {rooms.slice(0, 6).map(room => (
          <HabitacionMinCard
            key={room.id}
            id={room.id}
            imagePath={room.imagePath}
            name={room.name}
            isFeatured={room.isFeatured}
            shortDescription={room.shortDescription}
            longDescription={room.longDescription}
            url={room.url}
            persons={room.persons}
          />
        ))}
      </div>

      <div className="max-w-[220px] lg:max-w-full w-full mx-auto border-t mt-8 border-naranja-3" />
    </div>
  );
};

export default HabitacionOhters;