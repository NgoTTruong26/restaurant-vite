export interface GetUserProfileDTO {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  dateBirth: Date | null;
  gender: {
    id: string;
    gender: string;
  } | null;
  email: string | null;
  password: string;
  phone: string | null;
  nationality: string | null;
}
