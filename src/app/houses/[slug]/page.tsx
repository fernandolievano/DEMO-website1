'use client';

import { useParams, notFound } from 'next/navigation';
import HabitacionHeader from '@/components/sections/habitacion/HabitacionHeader';
import HabitacionComponent from '@/components/sections/habitacion/HabitacionComponent';
import HabitacionOhters from '@/components/sections/habitacion/HabitacionOthers';
import ServiciosComponent from '@/components/sections/servicios/ServiciosComponent';
import { rooms } from '@/app/data/rooms';
import './habitacion.css';

export default function Page() {
  const params = useParams<{ slug: string; }>();

  const selectedRoom = rooms.find(room => room.id === params.slug);


  if (selectedRoom != null) {
    return (
      <section className="px-0 habitacion">
        <HabitacionHeader
          title={selectedRoom.name ?? 'This house does not exist'}
          image={selectedRoom.imagePath ?? '/images/habitaciones/gallery/1.png'}
        />
        <HabitacionComponent room={selectedRoom} />
        {/* Habitación component */}
        <HabitacionOhters currentId={selectedRoom.id} />
        <ServiciosComponent />
      </section >
    );
  } else {
    return notFound();
  }


}
