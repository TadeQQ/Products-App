import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Routes } from "../../routes/Routes";

export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    await fetch(`https://dummyjson.com/products/categories`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <Link href={Routes.SEARCH(category)} key={category}>
          <h2>{category}</h2>
        </Link>
      ))}
    </div>
  );
};
