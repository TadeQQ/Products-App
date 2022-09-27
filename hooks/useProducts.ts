import { SWRConfiguration } from "swr";
import useSWRInfinite from "swr/infinite";
import { Product } from "../types/Product";
import { withURLParams } from "../utils/withURLParams";
import {
  DecodedValueMap,
  NumberParam,
  withDefault,
  StringParam,
} from "serialize-query-params";
import { apiClient } from "../utils/axios";

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

export const fetchProducts = (url: string) => {
  return apiClient.get<Product[]>(url);
};

interface UseProductsResponse {
  data: Product[];
  totalCount: string;
}

export const useProducts = (
  { _page, _limit = 5, category, brand }: FetchProductsQueryParams,
  options?: SWRConfiguration
) =>
  useSWRInfinite<UseProductsResponse>(
    (page, prevData) => {
      if (prevData?.data && !prevData?.data.length) return null;
      return getKey({
        _page: page + 1,
        _limit: _limit,
        category: category,
        brand: brand,
      });
    },
    (url) =>
      fetchProducts(url).then((res) => {
        return { totalCount: res.headers["x-total-count"], data: res.data };
      }),
    options
  );
