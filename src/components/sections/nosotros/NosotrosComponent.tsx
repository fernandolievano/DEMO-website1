import Slider from '@/components/slider/Slider';
import { SlideInterface } from '@/interfaces/slider';
import { poppins } from '@/utils/fonts';
import React, { PropsWithChildren } from 'react';
interface Props {
  title: string;
  paragraph: string;
  slider: SlideInterface[];
  buttonLink: string;
}

const NosotrosComponent = (props: PropsWithChildren<Props>) => {
  return (
    <section className="nosotros">
      <header>
        <h2 className={`px-4 pb-4 text-marron-1 uppercase font-medium tracking-[5px] text-2xl text-center lg:text-4xl lg:tracking-[18px] ${poppins.className}`}>
          {props.title}
        </h2>

        <div className="w-[30px] mx-auto border-t border-naranja-3" />

        <p
          className={`max-w-[830px] text-marron-2 text-sm leading-5 mx-auto px-8 text-center pt-4 lg:text-[19px] lg:leading-7 lg:px-0 lg:pt-8 ${poppins.className}`}
          dangerouslySetInnerHTML={{ __html: props.paragraph }}
        />
      </header>

      <div className="py-16">
        <Slider slides={props.slider} hasButton buttonLink={props.buttonLink} />
      </div>
    </section>
  );
};

export default NosotrosComponent;