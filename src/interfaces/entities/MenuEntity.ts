import { Image } from "interfaces/image";

export interface Course extends Image {
  title: string;
}

export interface MenuDataMainDishes {
  name: string;
  buffetGrilled?: Course[];
  buffetHotPot: Course[];
}

export interface Deals extends Image {
  title: string;
  decription: string;
}
