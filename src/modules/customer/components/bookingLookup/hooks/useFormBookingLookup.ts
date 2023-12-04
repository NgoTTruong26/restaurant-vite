import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaBookingLookup } from 'helpers/formSchemaBookingLookup';
import { useForm } from 'react-hook-form';

export interface InputBookingLookup {
  idBooking: string;
}

export function useFormBookingLookup() {
  const methods = useForm<InputBookingLookup>({
    defaultValues: { idBooking: '' },
    resolver: yupResolver(formSchemaBookingLookup),
  });

  return {
    methods,
  };
}
