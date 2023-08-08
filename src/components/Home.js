import React from "react";
import Brand from "./Brand";
import HomePageText from "./HomePageText";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <header>
        <Brand />
      </header>
      <div className="main">
        <HomePageText />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
