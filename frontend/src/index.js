import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./libs/redux/store";
import { TooltipProvider } from "./components/Tooltip";
import protectedPaths from "./constants/protectedPaths";
import ProtectedPaths from "./components/ProtectedPaths";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TooltipProvider delayDuration={100}>
        <CheckThemePreference />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            {protectedPaths.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<ProtectedPaths element={element} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
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
