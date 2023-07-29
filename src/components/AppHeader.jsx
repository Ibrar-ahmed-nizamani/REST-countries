import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const AppHeader = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeChangeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="h-16 bg-white  flex justify-between px-3  items-center shadow-md md:px-10 md:h-14 dark:bg-[hsl(209,23%,22%)] dark:text-white">
      <h2 className="font-bold text-sm tracking-tight md:text-lg">
        Where in the world?
      </h2>
      <button
        className="text-xs tracking-tight  font-base md:text-sm"
        onClick={themeChangeHandler}
      >
        <span className="pr-1">
          <FontAwesomeIcon icon={faMoon} size="lg" />
        </span>
        Dark Mode
      </button>
    </header>
  );
};

export default AppHeader;
