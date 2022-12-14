import React, { useState, useMemo } from "react";
import {
  main,
  container,
  filterName,
  button,
  filterContainer,
  select,
} from "./MainComponent.css";
import { ProductsList } from "../list/ProductsList";
import { useProducts } from "../../hooks/useProducts";
import { useFetchFilters } from "../../hooks/useFetchFilters";
import { formatString } from "../../utils/formatString";

export const MainComponent = () => {
  const [category, setCategory] = useState<string>("");

  const [brand, setBrand] = useState<string>("");
  const { filters } = useFetchFilters();

  const { data, size, setSize } = useProducts({
    brand: brand === "" ? undefined : brand,
    category: category === "" ? undefined : category,
  });
  const products = useMemo(() => data?.map((arr) => arr.data), [data]);

  const isLoadMoreVisible = useMemo(() => {
    const total = data?.reduce((acc, prev) => acc + prev.data.length, 0);
    return Number(total) < Number(data?.[0].totalCount);
  }, [data]);

  const handleChangeCategory: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setCategory(e.target.value);
  };
  const handleChangeBrand: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setBrand(e.target.value);
  };

  return (
    <div className={main}>
      <h3 className={filterName}>FILTERING</h3>
      <div className={filterContainer}>
        <div>
          <select className={select} onChange={handleChangeCategory}>
            <option value={""}>All</option>
            {filters?.categories.map((category) => (
              <option key={category} value={category}>
                {formatString(category)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select className={select} onChange={handleChangeBrand}>
            <option value={""}>All</option>
            {filters?.brands.map((brand) => (
              <option key={brand} value={brand}>
                {formatString(brand)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={container}>
        {data ? <ProductsList products={products} /> : "Loading..."}
        {isLoadMoreVisible && (
          <button className={button} onClick={() => setSize((p) => p + 1)}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
