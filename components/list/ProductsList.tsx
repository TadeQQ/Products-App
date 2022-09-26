import React from "react";
import { containerR, item } from "./Product.css";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { Product as ProductType } from "../../types/Product";
import Image from "next/image";

interface ProductListProps {
  products?: ProductType[][];
}

export const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className={containerR}>
      {products?.map((arr) =>
        arr.map((product) => (
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
    </div>
  );
};
