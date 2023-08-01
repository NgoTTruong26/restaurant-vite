import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetChildrenCategoryDTO } from "../dto/get-children-category.dto";

export default function useGetChildrenCategory() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["get_children_category"],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetChildrenCategoryDTO[]>>(
        `/booking-table/children-category`
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching, isLoading };
}
