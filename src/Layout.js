import React, { useEffect, useState } from "react";
import styles from "./app.module.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={styles.main}>
        <header>
          <button
            onClick={() => {
              theme == "light" ? setTheme("dark") : setTheme("light");
            }}
          >
            DARK MODE
          </button>
        </header>
        <main>{children}</main>
        <footer>Ömer Serdar ŞERİFOĞLU</footer>
      </div>
    </div>
  );
};

export default Layout;
