import type { NextPage } from "next";
import { MainComponent } from "../components/main/MainComponent";
const Home: NextPage = () => {
  return (
    <div>
      <header>
        <h1>Product app</h1>
      </header>
      <main>
        <MainComponent />
      </main>
    </div>
  );
};

export default Home;
