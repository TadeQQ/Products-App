import axios from "axios";
import React from "react";
import useSWR, { SWRConfiguration } from "swr";
import { Product } from "../types/Product";

interface UseProductProps {
  id: number;
}

const getKey = (id: number) => `https://dummyjson.com/products/${id}`;

const fetchProduct = ({ id }: UseProductProps) => {
  return axios.get<Product>(getKey(id));
};

export const useProduct = (
  { id }: UseProductProps,
  options?: SWRConfiguration
) => {
  const shouldFetch = typeof id !== "undefined" && id !== NaN;
  return useSWR<Product>(
    shouldFetch ? getKey(id) : null,
    () => fetchProduct({ id }).then((res) => res.data),
    options
  );
};
