import { Product } from "./Product";

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
