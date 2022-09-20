import React from "react";
import { apiClient } from "../utils/axios";
import useSWR, { SWRConfiguration } from "swr";

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
