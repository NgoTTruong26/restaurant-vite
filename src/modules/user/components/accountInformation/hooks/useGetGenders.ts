import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetGenderDTO } from "../dto/get-gender.dto";

export default function useGetGenders() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["get_list_gender"],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetGenderDTO[]>>(
        `/genders`
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching, isLoading };
}
