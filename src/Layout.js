import React, { useEffect, useState } from "react";
import styles from "./layout.module.css";

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
          <div
            className={styles["darkmode-icon"]}
            onClick={() => {
              var newThemeValue = theme == "light" ? "dark" : "light";
              setTheme(newThemeValue);

              localStorage.setItem("lastfm_case_templatemode", newThemeValue);
            }}
          >
            <i class="fa-solid fa-moon"></i>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
