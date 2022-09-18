import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { container, button } from "./FilterComponent.css";
import { CategoriesList } from "../list/CategoriesList";
export const FilterComponent = () => {
  return (
    <div className={container}>
      <Link href={Routes.CATEGORY}>
        <button className={button} disabled>
          {" "}
          BRAND_SELECT
        </button>
      </Link>

      <CategoriesList />
    </div>
  );
};
