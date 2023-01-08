import React, { useEffect, useState } from "react";
import styles from "./app.module.css";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("lastfm_case_templatemode")
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={styles.main}>
        <header>
          <button
            onClick={() => {
              var newThemeValue = theme == "light" ? "dark" : "light";
              setTheme(newThemeValue);

              localStorage.setItem("lastfm_case_templatemode", newThemeValue);
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
