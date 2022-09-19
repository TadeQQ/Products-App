import useSWR, { SWRConfiguration } from "swr";
import useSWRInfinite from "swr/infinite";
import { ProductsResponse } from "../types/Response";
import { Product } from "../types/Product";
import { withURLParams } from "../utils/withURLParams";
import {
  DecodedValueMap,
  NumberParam,
  withDefault,
  StringParam,
} from "serialize-query-params";
import { apiClient } from "../utils/axios";
import { useEffect } from "react";

const FetchProductsQueryConfig = {
  _page: withDefault(NumberParam, 1),
  _limit: withDefault(NumberParam, 5),
  category: StringParam,
  brand: StringParam,
};

type FetchProductsQueryParams = Partial<
  DecodedValueMap<typeof FetchProductsQueryConfig>
>;

const getKey = (params: FetchProductsQueryParams) => {
  return withURLParams("/products", FetchProductsQueryConfig, params);
};
// const getKey = ({ page, , limit }: UseProductsProps) => {
//   if (page && !prevPage.length) return null; // reached the end
//   return `/users?page=${pageIndex}&limit=10`; // SWR key
// };

export const fetchProducts = (url: string) => {
  return apiClient.get<Product[]>(url);
};

export const useProducts = (
  params: FetchProductsQueryParams,
  options?: SWRConfiguration
) =>
  useSWRInfinite(
    (page, prevData) => {
      if (prevData && !prevData?.length) return null;
      return getKey(params);
    },
    (url) => fetchProducts(url).then((res) => res.data),
    options
  );
