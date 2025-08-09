interface RoomServiceInterface {
  iconPath: string;
  name: string;
}


export interface RoomInterface {
  id: string;
  name: string;
  imagePath: string;
  shortDescription: string;
  longDescription: string;
  url: string;
  isFeatured: boolean;
  persons: number;
  services: RoomServiceInterface[];
  gallery: string[];
}