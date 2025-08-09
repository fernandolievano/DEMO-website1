/* eslint-disable @next/next/no-img-element */
'use client';
import HamburguerButton from './HamburguerButton';
import NavbarMenu from './NavbarMenu';
import useNavbar from '@/hooks/useNavBar';

import './navbar.css';
import { useNotFound } from '@/contexts/404Context';

// TODO: Mejorar imagen de logo navbar

const Navbar = () => {
  const { navbarScrolledStatus } = useNavbar();
  const { is404 } = useNotFound();

  return (
    <div className={`${is404 ? 'bg-opacity-100 text-marron-2 navbar-404' : (navbarScrolledStatus ? 'bg-marron-1 bg-opacity-50 text-white backdrop-blur-md' : 'bg-white text-white bg-opacity-5')} fixed top-0 left-0 z-40 w-full max-h-screen overflow-auto  shadow-sm backdrop-blur-md`}>
      <div className={`${navbarScrolledStatus ? 'pt-4' : 'pt-4 lg:pt-12'} px-6 pb-4 w-full max-w-[1128px] mx-auto transition-all`}>
        <div className={`flex items-center justify-between py-2 ${navbarScrolledStatus ? 'lg:hidden' : ''}`}>
          {
            is404 ? (
              <img className="w-[120px] h-[60px] object-cover object-center" src="/images/logo-navbar-dark.png" alt="LOGO NAVBAR" />
            ) : (
              <img className="w-[120px] h-[60px] object-cover object-center" src="/images/logo-navbar.png" alt="LOGO NAVBAR" />
            )
          }

          <HamburguerButton />
        </div>
        <div className={`${navbarScrolledStatus ? 'mb-0 hidden' : 'mb-4 max-lg:hidden'} mt-4 w-full  border-t  ${is404 ? 'border-marron-2/25' : 'border-naranja-3/10 lg:border-blanco-2/10'}`} />

        <div className="flex items-start justify-between lg:hidden" />
        <NavbarMenu />
      </div>
    </div >
  );
};

export default Navbar;