'use client';

// TODO: fix rotation angles

import clsx from 'clsx';
import useNavbar from '@/hooks/useNavBar';

const HamburguerButton = () => {
  const { navbarStatus, setNavbarStatus } = useNavbar();

  return (
    <button className='flex flex-col gap-[8px] justify-self-end cursor-pointer group [&>div]:transition [&>div]:duration-700 [&>div]:ease-in-out order-2 lg:hidden'
      aria-label='Toggle navigation menu'
      onClick={() => setNavbarStatus(!navbarStatus)}>
      <div
        className={clsx(
          'w-7 h-[1px] bg-white group-hover:xl:bg-white',
          navbarStatus
            ? 'rotate-[-133deg] translate-y-[8px]'
            : 'rotate-0 translate-y-0'
        )}
      />
      <div
        className={clsx(
          'w-7 h-[1px] bg-white group-hover:xl:bg-white',
          navbarStatus ? 'opacity-0' : 'opacity-100'
        )}
      />
      <div
        className={clsx(
          'w-7 h-[1px] bg-white group-hover:xl:bg-white',
          navbarStatus
            ? 'rotate-[133deg] -translate-y-[11px]'
            : 'rotate-0 translate-y-0'
        )}
      />
    </button>
  );
};

export default HamburguerButton;