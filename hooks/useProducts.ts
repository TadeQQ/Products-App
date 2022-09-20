import useSWR, { SWRConfiguration } from "swr";
import useSWRInfinite, { SWRInfiniteConfiguration } from "swr/infinite";
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

const FetchProductsQueryConfig = {
    _page: withDefault(NumberParam, 1),
    _limit: withDefault(NumberParam, 5, true),
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
    headers: any;
}

export const useProducts = (
    { _limit = 2, _page, category, brand }: FetchProductsQueryParams,
    options?: SWRInfiniteConfiguration
) =>
    useSWRInfinite<UseProductsResponse>(
        (page, prevData) => {
            console.log(prevData);
            if (prevData?.data && !prevData?.data.length) return null;
            return getKey({
                _page: page + 1,
                _limit,
                category,
                brand,
            });
        },
        (url) =>
            fetchProducts(url).then((res) => {
                return { data: res.data, headers: res.headers };
            }),
        options
    );
