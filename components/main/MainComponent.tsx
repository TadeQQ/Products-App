import React, { useEffect, useState } from "react";
import { FilterComponent } from "../filter/FilterComponent";
import { container, filterName } from "./MainComponent.css";
import { NewFilteredList } from "../list/NewFilteredList";
import { FilteredList } from "../list/FilteredList";
import { ProductsList } from "../list/ProductsList";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/Product";
interface DataProps {
  data: Product[];
}

export const MainComponent = () => {
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const { data } = useProducts({ _page: page });
  console.log("to są products:", data);

  return (
    <div className={container}>
      <div>
        <h3 className={filterName}>FILTERING</h3>
        {/* <FilterComponent /> */}
      </div>
      <div>
        {data ? (
          <ProductsList products={data as Product[]} />
        ) : (
          console.log("Loading...")
        )}

        <button onClick={() => setPage((p) => p + 1)}>click</button>
      </div>
    </div>
  );
};
