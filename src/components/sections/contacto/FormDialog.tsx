'use client';

import { poppins } from '@/utils/fonts';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

interface Props {
  type: string;
  hideDialog: React.Dispatch<React.SetStateAction<string>>;
}
interface PropsCard {
  type: string;
  hideDialog: React.Dispatch<React.SetStateAction<string>>;
}

const FormDialogCard = (props: PropsWithChildren<PropsCard>) => {
  const color = () => {
    switch (props.type) {
      case 'success':
        return '#8ED99E';
      case 'error':
        return '#D98E8E';

      default:
        return 'marron-2';
    }
  };
  const title = () => {
    switch (props.type) {
      case 'success':
        return 'Success!';
      case 'error':
        return 'Error';

      default:
        break;
    }
  };
  const text = () => {
    switch (props.type) {
      case 'success':
        return ` Your request has been submitted successfully. We will contact you shortly.`;
      case 'error':
        return `We couldn't send your message. Please try again later.`;

      default:
        break;
    }
  };
  const icon = () => {
    switch (props.type) {
      case 'success':
        return '/images/icons/success.svg';
      case 'error':
        return '/images/icons/error.svg';

      default:
        return '/images/icons/error.svg';
    }
  };

  return (
    <div
      className={`bg-main-bg mx-auto text-center w-full max-w-[500px] h-fit px-8 py-16 border-t-4 border-[${color()}] ${poppins.className}`}
    >
      <Image
        className='mx-auto w-[100px] h-[100px] p-1'
        src={icon()}
        width={92}
        height={92}
        alt='DEMO Hotel'
      />

      <h3 className={`font-bold text-[${color()}] text-2xl text-center mb-6`}>
        {title()}
      </h3>
      <p className='text-base leading-6 text-center text-marron-2'>
        {text()}
      </p>

      <button
        className='uppercase px-4 py-2 w-full max-w-[200px] bg-marron-1 text-naranja-3 transition-colors hover:bg-naranja-3 hover:text-marron-1 mx-auto mt-8'
        onClick={() => props.hideDialog('hidden')}
      >
        Continuar
      </button>
    </div>
  );
};

const FormDialog = (props: PropsWithChildren<Props>) => {
  switch (props.type) {
    case 'success':
      return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full py-4 overflow-hidden transition-all opacity-100 bg-marron-1 bg-opacity-5 backdrop-blur-xl xl:py-8">
          <FormDialogCard type={props.type} hideDialog={props.hideDialog} />
        </div>
      );
    case 'error':
      return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full py-4 overflow-hidden transition-all opacity-100 bg-marron-1 bg-opacity-5 xl:py-8 backdrop-blur-xl">
          <FormDialogCard type={props.type} hideDialog={props.hideDialog} />
        </div>
      );

    case 'hidden':
      return (
        <div className="hidden transition-all opacity-0" />
      );
  }
};

export default FormDialog;