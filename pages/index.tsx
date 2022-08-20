import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BrandSelect } from "../components/filtering/brandSelect";
import { CategorySelect } from "../components/filtering/categorySelect";
import { List } from "../components/list/list";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Product app</h1>
      </header>
      <main>
        <div>
          <h3>Filtering</h3>
          <BrandSelect />
          <CategorySelect />
        </div>
        <div>
          <List />
        </div>
      </main>
    </div>
  );
};

export default Home;
