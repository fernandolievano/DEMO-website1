import { poppins } from '@/utils/fonts';
import React, { PropsWithChildren } from 'react';
import HabitacionesLine from './HabitacionesLine';
import HabitacionesCard from './HabitacionesCard';
import { rooms } from '@/app/data/rooms';

interface Props {
  title: string;
  paragraph?: string;
}

const HabitacionesComponent = (props: PropsWithChildren<Props>) => {
  return (
    <section className="habitaciones mx-auto w-full max-w-[1200px] px-4 py-8">
      <header className='py-8'>
        <h2 className={`px-4 pb-4 text-marron-1 uppercase font-medium tracking-[5px] text-2xl text-center lg:text-4xl lg:tracking-[18px] ${poppins.className}`}>
          {props.title}
        </h2>
        <div className="w-[30px] mx-auto border-t border-naranja-3" />

        {
          (props.paragraph != null) && (
            <p
              className={`max-w-[830px] text-marron-2 text-sm leading-5 mx-auto px-8 text-center pt-4 lg:text-[19px] lg:leading-7 lg:px-0 lg:pt-8 ${poppins.className}`}
              dangerouslySetInnerHTML={{ __html: props.paragraph }}
            />
          )
        }

      </header>
      <HabitacionesLine />

      <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:py-8 xl:py-16">
        {rooms.slice(0, 6).map(room => (
          <HabitacionesCard
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
      <HabitacionesLine />
    </section>
  );
};

export default HabitacionesComponent;