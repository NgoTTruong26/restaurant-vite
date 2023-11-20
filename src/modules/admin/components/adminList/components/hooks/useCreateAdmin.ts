import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiAdmin } from 'configs/axiosInterceptor';
import { toast } from 'react-hot-toast';
import { CreateAdminDTO } from '../../dto/create-admin.dto';
import { GetAdminDTO } from '../../dto/get-admins.dto';
import { IInputDataCreateAdmin } from '../createAdmin';

export default function useCreateAdmin() {
  return useMutation(async (inputCreateAdmin: IInputDataCreateAdmin) => {
    const apiAdmin = ApiAdmin(() => {});

    const { day, month, year, ...newDataInput } = inputCreateAdmin;

    const dataCreateAdmin: CreateAdminDTO = Object.keys(newDataInput).reduce(
      (newObj, currKey) => {
        const key = currKey as keyof typeof newDataInput;
        if (!newObj[key] || !newObj[key]?.toString().trim()) {
          newObj[
            key as keyof Pick<
              typeof newDataInput,
              'email' | 'gender' | 'nationality' | 'phoneNumber'
            >
          ] = null;
        }

        return newObj;
      },
      newDataInput,
    );

    if (
      month &&
      day &&
      year &&
      !isNaN(new Date(`${month}/${parseInt(day) + 1}/${year}`).getFullYear())
    ) {
      dataCreateAdmin.dateBirth = new Date(
        `${month}/${parseInt(day) + 1}/${year}`,
      );
    }

    const data = await toast.promise(
      apiAdmin.post<IAxiosResponse<GetAdminDTO>>(
        'admin/create-admin',
        dataCreateAdmin,
      ),
      {
        loading: 'Loading',
        success: 'Create Profile Success',
        error: 'Create Profile Failed',
      },
    );

    return data.data;
  });
}
