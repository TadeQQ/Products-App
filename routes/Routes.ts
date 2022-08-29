export const Routes = {
  HOME: "/",
  CATEGORY: "/search/by_category",
  SEARCH: (category: string) => "/search/" + category,
  LOGIN: "/login",
  PRODUCT: (id: number | string) => "/product/" + id,
};
