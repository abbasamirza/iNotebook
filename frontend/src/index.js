import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import path from "./constants/paths";
import Notes from "./pages/Notes";
import { Provider } from "react-redux";
import { store } from "./libs/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CheckThemePreference />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={path.notes} element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
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
