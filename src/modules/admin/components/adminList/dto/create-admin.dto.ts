import { IInputArrayRole } from '../components/createAdmin';

export interface CreateAdminDTO {
  username: string;
  password: string;
  repeat_password: string;
  fullName: string;
  dateBirth?: Date | null;
  gender?: string | null;
  roles: IInputArrayRole[];
  nationality?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
}
