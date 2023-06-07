export interface ResponseAuth {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  age: number | null;
  email: string | null;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
}
