import React, { useState, useEffect } from "react";
import { container, button } from "./FilterComponent.css";
export const FilterComponent = () => {
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
    <div className={container}>
      <button className={button}> BRAND_SELECT</button>
      <select name="categories" id="categories">
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
