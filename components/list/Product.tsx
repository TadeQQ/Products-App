import React, { useState, useEffect } from "react";
import { container, item, button } from "./Product.css";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { Product as ProductType } from "../../types/Product";
import Image from "next/image";
import { useProducts } from "../../hooks/useProducts";
export const Product = () => {
  const [limit, setLimit] = useState(5);
  const { data } = useProducts({ limit: limit });
  const shoudShow = data?.limit < data?.total;

  const loadMore = () => {
    setLimit((prev) => prev + 5);
  };

  console.log(data);

  return (
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

      {shoudShow && (
        <button className={button} onClick={() => loadMore()}>
          LoadMore
        </button>
      )}
    </div>
  );
};
