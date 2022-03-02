import { useEffect, useState } from "react";

function useTheme() {
  const [theme,setTheme]= useState()
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove("dark");
    }

    // localStorage.removeItem('theme')
  }, []);
  const root = window.document.documentElement;
  function setDarkMode() {
    setTheme('dark')
    localStorage.setItem('prefers-color-scheme','dark');
    root.classList.remove('light')
    root.classList.add('dark')
  }
  function setLightMode() {
    setTheme('light')
    localStorage.setItem('prefers-color-scheme',"light");
    root.classList.remove('dark')
    root.classList.add('light')
  }
  function toggleTheme() {
   theme === "dark" ? setLightMode() : setDarkMode()
  }
  return [theme, toggleTheme];
}

export default useTheme;
