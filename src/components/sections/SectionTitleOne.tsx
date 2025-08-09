import { poppins } from '@/utils/fonts';
import React, { PropsWithChildren } from 'react';
interface Props {
  title: string;
  titleClassname?: string;
  paragraph?: string;
  paragraphClassname?: string;
}

const SectionTitleOne = (props: PropsWithChildren<Props>) => {
  return (
    <header className='section-title-one'>
      <h2 className={`px-4 pb-4 text-marron-1 uppercase font-medium tracking-[5px] text-2xl text-center lg:text-4xl lg:tracking-[18px] ${poppins.className} ${(props.titleClassname != null) ? props.titleClassname : ''}`}>
        {props.title}
      </h2>
      <div className="w-[30px] mx-auto border-t border-naranja-2" />

      {
        (props.paragraph != null) && (
          <p
            className={`max-w-[830px] text-marron-2 text-sm leading-5 mx-auto px-8 text-center pt-4 lg:text-[19px] lg:leading-7 lg:px-0 lg:pt-8 ${poppins.className} ${(props.paragraphClassname != null) ? props.paragraphClassname : ''}`}
            dangerouslySetInnerHTML={{ __html: props.paragraph }}
          />
        )
      }
    </header>
  );
};

export default SectionTitleOne;