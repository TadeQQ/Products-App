import React, { useState, useEffect } from "react";
import { container, item, button } from "./Product.css";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { Product as ProductType } from "../../types/Product";
import Image from "next/image";
import { useProducts } from "../../hooks/useProducts";
export const Product = () => {
  // const [page, setPage] = useState(1);
  const { data, size, setSize } = useProducts();
  // const shoudShow = Number(data?.limit) < Number(data?.total);

  const loadMore = () => {
    setSize(size + 1);
  };
  // let products = 0;
  // if (data) {
  //   for (let i = 0; i < data?.length; i++) {
  //     products += data[i].products.length;
  //   }
  // }
  console.log(data);

  return (
    <div className={container}>
      {/* total products: {products} */}
      {data?.map((response) =>
        response.map((product) => (
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
        ))
      )}
      {/* {shoudShow && ( */}
      <button className={button} onClick={() => loadMore()}>
        LoadMore
      </button>
      {/* )} */}
    </div>
  );
};
