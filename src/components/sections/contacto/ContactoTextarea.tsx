import React, { PropsWithChildren } from 'react';

interface Props {
  label: string;
  rows: number;
  hasError?: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const ContactoTextarea = (props: PropsWithChildren<Props>) => {
  return (
    <div className="relative flex flex-col gap-3 max-w-[330px] lg:max-w-full mx-auto w-full">
      <textarea
        rows={props.rows}
        id="name"
        name="name"
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

export default ContactoTextarea;