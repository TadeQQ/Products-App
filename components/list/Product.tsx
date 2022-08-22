import React, { useState, useEffect } from "react";
import { container, item, button } from "./Product.css";
import test_photo from "../../public/test_photo.jpg";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
export const Product = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);

  const fetchData = async (limit: number) => {
    await fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  };
  const loadMore = () => {
    setLimit((prev) => prev + 5);
  };
  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  return (
    <div className={container}>
      {products.map((product) => (
        <Link href={Routes.PRODUCT(product.id)} key={product.id}>
          <div className={item}>
            <img
              src={`https://dummyjson.com/image/i/products/${product.id}/1.jpg`}
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
      <button className={button} onClick={() => loadMore()}>
        LoadMore
      </button>
    </div>
  );
};
