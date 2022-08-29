import React from "react";
import Link from "next/link";
import { Routes } from "../../../routes/Routes";
const Search = () => {
  return (
    <div>
      <header>
        <a
          href={Routes.HOME}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <h1>Product app</h1>
        </a>
      </header>
      <main>
        <div>Search</div>
      </main>
    </div>
  );
};

export default Search;
