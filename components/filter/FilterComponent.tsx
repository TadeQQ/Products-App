import React from "react";
import { container, button } from "./FilterComponent.css";
export const FilterComponent = () => {
  return (
    <div className={container}>
      <button className={button}> BRAND_SELECT</button>
      <button className={button}> CATEGORY_CELECT</button>
    </div>
  );
};
