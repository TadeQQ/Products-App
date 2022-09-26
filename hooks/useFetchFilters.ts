import useSWR from "swr";
import { apiClient } from "../utils/axios";

// const getKey = ({ page, , limit }: UseProductsProps) => {
//   if (page && !prevPage.length) return null; // reached the end
//   return `/users?page=${pageIndex}&limit=10`; // SWR key
// };

interface UseFetchFiltersResponse {
  categories: string[];
  brands: string[];
}

export const useFetchFilters = () => {
  const { data: filters, ...restSWR } = useSWR<UseFetchFiltersResponse>(
    ["filters"],
    () => apiClient.get("/filters").then((res) => res.data)
  );

  return { filters, ...restSWR };
};
