import "../styles/css/Utils.css";
import React, { useEffect } from "react";
import Brand from "./Brand";
import HomePageText from "./HomePageText";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/main");
    }
  }, [navigate]);

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
