export interface IAdmin {
  id: string;
  username: string;
  fullName: string;
  age: number | null;
  email: string | null;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
}
