'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { poppins } from '@/utils/fonts';
import { useNotFound } from '@/contexts/404Context';

export default function Custom404() {
  const router = useRouter();

  const { setIs404 } = useNotFound();

  useEffect(() => {
    setIs404(true);
    return () => {
      setIs404(false);
    };
  }, [setIs404]);

  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/images/not-found.jpg')] min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full bg-main-bg bg-opacity-80">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-[600px] px-6 pb-8 pt-20 lg:pt-40 mx-auto">
          <h1 className={`text-9xl text-oro font-extralight pb-6 ${poppins.className}`}>404</h1>
          <h2 className={`text-2xl text-oro font-semibold uppercase ${poppins.className}`}>Page not found</h2>

          <div className="w-[30px] mx-auto border-t border-t-naranja-2 my-6" />

          <p className={`text-marron-1 ${poppins.className} leading-6 text-center pb-8`}>
            We’re sorry, but the page you’re looking for is not available.
            <br />
            We invite you to return to the <Link href='/' className='text-[#7a8a93]'>home page</Link> and continue exploring our hotel and services.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row flew-wrap">
            <Link
              href='/'
              className='w-[155px] text-center pl-4 pr-2 py-3 tracking-[8px] uppercase border bg-marron-1 text-main-bg border-marron-1 hover:bg-marron-0 hover:border-marron-0 hover:text-main-bg transition-colors duration-300 ease-in-out'
            >
              Home
            </Link>

            <button
              onClick={() => router.back()}
              className='w-[155px] text-center pl-4 pr-2 py-3 tracking-[8px] uppercase border bg-transparent backdrop-blur-md text-marron-1 border-marron-1 hover:bg-marron-0 hover:border-marron-0 hover:text-main-bg transition-colors duration-300 ease-in-out'
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}