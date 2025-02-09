"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.theme = "";
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    console.log(theme);
    const localTheme = localStorage.theme;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}

export default ThemeContextProvider;
