export interface GetDishDTO {
  id: string;
  image: string;
  name: string;
  byNumberOfPeople: boolean;
  price?: string;
  createdAt: string;
  updateAt: string;
}

export interface GetSetDishDTO {
  id: string;
  image: string;
  name: string;
  special: boolean;
  dishes: GetDishDTO[];
  _count: { dishes: number };
  nextPage: boolean;
}

export interface GetBuffetMenuDTO {
  id: string;
  name: string;
  image: string;
  special: boolean;
  setDishes: GetSetDishDTO[];
}
