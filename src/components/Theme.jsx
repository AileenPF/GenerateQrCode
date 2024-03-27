import React, { useState, useEffect } from "react";

function Theme() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="theme-box">
      <div className="theme">
        <div
          className={`theme-button ${theme === "light" ? "light" : "dark"}`}
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          <ion-icon name={theme === "light" ? "sunny" : "moon"}></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Theme;
