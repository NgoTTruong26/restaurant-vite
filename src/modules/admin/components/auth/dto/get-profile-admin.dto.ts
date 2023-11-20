export interface IProfileAdminDTO {
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

export interface GetPreviewProfileAdminDTO {
  id: string;
  fullName: string;
}
