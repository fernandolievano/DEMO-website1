import { LanguagesButtonInterface } from '@/interfaces/navbar';


const LanguagesButton = ({ className = '' }: LanguagesButtonInterface) => {
  return (
    <button className={`flex items-center justify-between gap-1 py-1 px-2 border text-white border-naranja-3 lg:border-white hover:bg-naranja-3 hover:text-marron-1 hover:border-naranja-3 lg:hover:border-naranja-3 transition-colors ${className}`}>
      <span className="font-normal">ES</span>
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L0 0H10L5 5Z" fill="currentColor" />
      </svg>
    </button>
  );
};

export default LanguagesButton;