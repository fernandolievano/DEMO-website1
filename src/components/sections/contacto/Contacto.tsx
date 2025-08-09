import HomeHeading from '@/components/sections/home/HomeHeading';
import ContactoForm from './ContactoForm';
import './contacto.css';

const Contacto = () => {
  return (
    <section className="px-0 py-16">
      <HomeHeading title='CONTACT' />
      <ContactoForm />
    </section>
  );
};

export default Contacto;