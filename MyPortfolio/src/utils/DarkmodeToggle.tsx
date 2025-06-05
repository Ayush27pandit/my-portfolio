import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

function DarkmodeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  //on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  //on toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 transition-all"
      >
        {darkMode ? <FaSun /> : <FiMoon />}
      </button>
    </div>
  );
}

export default DarkmodeToggle;
