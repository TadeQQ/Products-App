import React, { useState, useEffect } from "react";
import { container, item, button } from "./Product.css";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { Product as ProductType } from "../../types/Product";
import Image from "next/image";

interface ProductListProps {
  products?: ProductType[];
}

export const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className={container}>
      {products?.map((product) => (
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
  );
};
