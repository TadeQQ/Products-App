import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { useRouter } from "next/router";
export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const fetchData = () => {};
  // const router = useRouter();
  // const urlCategory = String(router.query["categoryName"]);
  // console.log(urlCategory);

  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
      .then((response) => response.json())
      .then(setCategories)
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <select onChange={(e) => router.replace(`./search/${e.target.value}`)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            <Link href={Routes.SEARCH(category)} key={category}>
              <p>{category}</p>
            </Link>
          </option>
        ))}
      </select>
    </div>
  );
};
