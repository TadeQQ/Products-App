import axios from "axios";
import useSWR, { SWRConfiguration } from "swr";
import { ProductsResponse } from "../types/Response";

interface UseProductsProps {
  limit: number;
}

const getKey = (limit: number) =>
  `https://dummyjson.com/products?limit=${limit}`;

export const fetchProducts = ({ limit }: UseProductsProps) => {
  return axios.get<ProductsResponse["products"]>(getKey(limit));
};

export const useProducts = (
  { limit }: UseProductsProps,
  options?: SWRConfiguration
) => {
  return useSWR<ProductsResponse["products"]>(
    getKey(limit),
    () => fetchProducts({ limit }).then((res) => res.data),
    options
  );
};
