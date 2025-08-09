import '@/components/sections/home/home.css';
import HomeHeader from '@/components/sections/home/header/Header';
import HomeHotel from '@/components/sections/home/hotel/Hotel';
import ServiciosComponent from '@/components/sections/servicios/ServiciosComponent';
import HomeRestaurante from '@/components/sections/home/restaurante/Restaurante';
import HomeHabitaciones from '@/components/sections/home/habitaciones/Habitaciones';
import Contacto from '@/components/sections/contacto/Contacto';

export default function Home() {
  console.log('I am rendered on the server');

  return (
    <main className="relative min-h-screen">
      <HomeHeader />
      <HomeHotel />
      <ServiciosComponent />
      <HomeRestaurante />
      <HomeHabitaciones />
      <Contacto />
    </main>
  );
}
