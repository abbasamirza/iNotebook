export const toggleTheme = () => {
  const theme = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";
  localStorage.setItem("theme", theme);

  document.documentElement.classList.toggle("dark");
};
