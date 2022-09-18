import axios, { AxiosRequestConfig } from "axios";

const createBaseAPIClient = (config?: AxiosRequestConfig) => {
  return axios.create({
    ...config,
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
  });
};

export const apiClient = createBaseAPIClient();
