import axios from "axios";
import useSWR, { SWRConfiguration } from "swr";
import { Product } from "../types/Product";

interface UseFilteredProductProps {
  category: string;
}

const getKey = (category?: string) =>
  `https://localhost:3000/products${category ? "/" + category : ""}`;

const fetchProduct = ({ category }: UseFilteredProductProps) => {
  return axios.get<Product[]>(getKey(), { params: { category } });
};

export const useFilteredProduct = (
  { category }: UseFilteredProductProps,
  options?: SWRConfiguration
) => {
  const shouldFetch = typeof category !== "undefined";
  return useSWR<Product[]>(
    shouldFetch ? getKey(category) : null,
    () => fetchProduct({ category }).then((res) => res.data),
    options
  );
};
