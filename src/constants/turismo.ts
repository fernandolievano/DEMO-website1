import { ImageInterface } from '@/interfaces/general';

export interface TouristAttractionInterface {
  id: number;
  title: string;
  slug: string;
  featured: boolean;
  cover: ImageInterface;
  description: string;
  gallery: ImageInterface[];
}