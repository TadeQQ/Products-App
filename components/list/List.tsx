import React from "react";
import { Product } from "./Product";
import { container } from "./List.css";
export const List = () => {
  return (
    <div className={container}>
      <ul>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
      </ul>
      <button>LoadMore</button>
    </div>
  );
};
