import axios from "axios";
import useSWR, { SWRConfiguration } from "swr";
import useSWRInfinite from "swr/infinite";
import { ProductsResponse } from "../types/Response";
import { Product } from "../types/Product";

interface UseProductsProps {
  limit?: number;
  page: number;
}

const getKey = (page: number, prevData?: Product[]) => {
  if (page && !prevData?.length) return null;

  return `http://localhost:3000/products?_page=${page}&_limit=5`;
};
// const getKey = ({ page, , limit }: UseProductsProps) => {
//   if (page && !prevPage.length) return null; // reached the end
//   return `/users?page=${pageIndex}&limit=10`; // SWR key
// };

export const fetchProducts = (url: string) => {
  return axios.get<Product[]>(url).then((res) => res.data);
};

export const useProducts = (
  // { limit = 5, page }: UseProductsProps,
  options?: SWRConfiguration
) => {
  return useSWRInfinite<Product[]>(getKey, fetchProducts, options);
};
