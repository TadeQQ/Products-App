import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Routes } from "../../routes/Routes";
import { container, button } from "./FilterComponent.css";
export const FilterComponent = () => {
  return (
    <div className={container}>
      <Link href={Routes.CATEGORY}>
        <button className={button} disabled>
          {" "}
          BRAND_SELECT
        </button>
      </Link>

      <Link href={Routes.CATEGORY}>
        <button className={button}> CATEGORY_SELECT</button>
      </Link>
    </div>
  );
};
