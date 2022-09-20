import React, { useMemo, useState } from "react";
import { FilterComponent } from "../filter/FilterComponent";
import { container, filterName } from "./MainComponent.css";
import { NewFilteredList } from "../list/NewFilteredList";
import { FilteredList } from "../list/FilteredList";
import { ProductsList } from "../list/ProductsList";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/Product";
import { useFetchFilters } from "../../hooks/useFetchFilters";
interface DataProps {
    data: Product[];
}

export const MainComponent = () => {
    const { filters } = useFetchFilters();
    const [category, setCategory] = useState<string | undefined>();
    const [brand, setBrand] = useState<string | undefined>();
    const { data, setSize, size } = useProducts({ category, brand }, {});
    const handleLoadMore = () => {
        setSize((p) => p + 1);
    };

    const isFetchMoreVisible = useMemo(() => {
        const total = data
            ?.flat()
            .reduce((acc, prev) => acc + prev.data.length, 0);
        return Number(total) < data?.[0].headers["x-total-count"];
    }, [data]);
    const products = useMemo(() => data?.map((data) => data.data), [data]);
    return (
        <div className={container}>
            <div>
                <h3 className={filterName}>FILTERING</h3>
                <select onChange={(event) => setCategory(event.target.value)}>
                    {filters?.categories.map((category: string) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <select>
                    {filters?.brands.map((brand: string) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {products && <ProductsList products={products} />}

                {isFetchMoreVisible && (
                    <button onClick={handleLoadMore}>Load more</button>
                )}
            </div>
        </div>
    );
};
