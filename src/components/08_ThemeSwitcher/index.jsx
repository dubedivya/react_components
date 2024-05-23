import React from "react";
import "./style.css";
import useLocalStorage from "./useLocalStorage.jsx";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div className="theme-switch-container" data-theme={theme}>
      <div className="theme-mode">
        <h1>Hello World!</h1>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
