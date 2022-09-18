import React, { useState } from "react";
import { container, item, button } from "./Product.css";
import Link from "next/link";
import { Routes } from "../../routes/Routes";

import Image from "next/image";
import { useFilteredProduct } from "../../hooks/useFilteredProducts";
import { useRouter } from "next/router";
import { FilterComponent } from "../filter/FilterComponent";
export const FilteredProduct = () => {
  const router = useRouter();
  const productCategory = String(router.query["categoryName"]);
  const [limit, setLimit] = useState(5);
  const { data } = useFilteredProduct({ category: productCategory });

  const loadMore = () => {
    setLimit((prev) => prev + 5);
  };

  console.log(data);

  return (
    <div>
      <a href={Routes.HOME}>
        {" "}
        <h1>Product app</h1>
      </a>
      <div>
        <h3>FILTERING</h3>
        <FilterComponent />
      </div>
      <div className={container}>
        {data?.products?.map((product) => (
          <Link href={Routes.PRODUCT(product.id)} key={product.id}>
            <div className={item}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                height={200}
                width={220}
              />
              <div>
                <h3>{product.title}</h3>
                {product.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
