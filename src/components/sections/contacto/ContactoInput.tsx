import React, { PropsWithChildren } from 'react';

interface Props {
  label: string;
  type: string;
  hasError?: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const ContactoInput = (props: PropsWithChildren<Props>) => {
  return (
    <div className="flex flex-col gap-3 max-w-[330px] mx-auto w-full relative">
      <input
        type={props.type}
        id={props.label}
        name={props.label}
        placeholder={props.label}
        className="w-full px-4 py-3 transition-all border border-naranja-3 placeholder:text-marron-2 text-marron-1 bg-main-bg outline-naranja-2"
        onChange={(e) => props.onChange(e.target.value)}
        required
      />

      <span className="absolute -top-[8px] text-xs left-2 bg-main-bg text-naranja-2 px-2">
        {props.label}
      </span>
    </div>
  );
};

export default ContactoInput;