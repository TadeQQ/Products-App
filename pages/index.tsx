import type { NextPage } from "next";
import { MainComponent } from "../components/main/MainComponent";
import { Routes } from "../routes/Routes";

const Home: NextPage = () => {
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
        <MainComponent />
      </main>
      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        PRZYKŁADOWE ZADANIE FRONT-END DEVELOPER 2022 TADEUSZ KISZKA
      </footer>
    </div>
  );
};

export default Home;
