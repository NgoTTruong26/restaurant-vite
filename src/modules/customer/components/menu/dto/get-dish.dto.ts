export interface GetDishesListDTO {
  dishes: GetDishDTO[];
  _count: {
    dishes: number;
  };
  nextPage: number | null;
  idBuffetMenu: string;
  idSetDish: string;
}

export interface GetDishDTO {
  id: string;
  image: string;
  name: string;
  byNumberOfPeople: boolean;
  price?: string | null;
}

export interface GetSetDishDTO {
  id: string;
  image: string;
  name: string;
  special: boolean;
  dishes?: GetDishDTO[];
}

export interface GetBuffetMenuDTO {
  id: string;
  name: string;
  price: number;
  image: string;
  special: boolean;
  setDishes?: GetSetDishDTO[];
}
