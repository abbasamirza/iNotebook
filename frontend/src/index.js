import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CheckThemePreference />
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function CheckThemePreference() {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme && selectedTheme !== "dark") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
}
