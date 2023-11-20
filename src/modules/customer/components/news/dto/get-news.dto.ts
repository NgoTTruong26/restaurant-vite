export interface GetNewsDTO {
  id: string;
  title: string;
  srcImg: string;
  introduce?: string;
  content: string;
  createdAt: string;
}

export interface GetNewsListDTO {
  newsList: GetNewsDTO[];
  nextPage: number | null;
}
