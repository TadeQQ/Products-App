export const Routes = {
  HOME: "/",
  CATEGORY: "/search/categories",
  SEARCH: (category: string) => "/search/" + category,
  LOGIN: "/login",
  PRODUCT: (id: number | string) => "/product/" + id,
};
