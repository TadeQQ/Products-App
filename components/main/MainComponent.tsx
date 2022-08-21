import React from "react";
import { FilterComponent } from "../filter/FilterComponent";
import { List } from "../list/List";
import { container, filterName } from "./MainComponent.css";
export const MainComponent = () => {
  return (
    <div className={container}>
      <div>
        <h3 className={filterName}>FILTERING</h3>
        <FilterComponent />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};
