import React from "react";
import { useState, useEffect } from "react";
import { Routes } from "../../routes/Routes";
import Image from "next/image";
import { useFilteredProduct } from "../../hooks/useFilteredProducts";
import Link from "next/link";
import { container, item, button } from "./Product.css";
import { formatString } from "../../utils/formatString";
export const NewFilteredList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const { data } = useFilteredProduct({ category: categoryName });
  const fetchData = async () => {
    await fetch(`http://localhost:3000/categories`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      });
  };
  // const router = useRouter();
  // const urlCategory = String(router.query["categoryName"]);
  // console.log(urlCategory);
  useEffect(() => {
    fetchData();
  }, []);
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategoryName(e.target.value);
  };
  return (
    <div>
      <div>
        <select onChange={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {formatString(category)}
            </option>
          ))}
        </select>
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
