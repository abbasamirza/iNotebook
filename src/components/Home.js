import React from "react";
import Brand from "./Brand";
import HomePageText from "./HomePageText";
import Footer from "./Footer";
import "../styles/css/Utils.css";

const Home = () => {
  return (
    <>
      <header>
        <Brand />
      </header>
      <div className="main-height fa-center">
        <HomePageText />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
