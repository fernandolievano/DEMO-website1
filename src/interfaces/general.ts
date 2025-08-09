import { Dispatch, SetStateAction } from 'react';

export interface ChildrenInterface {
  children: React.ReactNode;
}

export interface AppContextValues {
  navbarStatus: boolean;
  setNavbarStatus: Dispatch<SetStateAction<boolean>>;
}
export interface ImageInterface {
  thumbnail: string;
  medium: string;
  large: string;
  full: string;
}