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
          <nav className={styles.navbar}>
            <div className={styles["navbar__title-wrapper"]}>
              <a href="/" className={styles["navbar__title"]}>
                Ömer Serdar ŞERİFOĞLU - CASE
              </a>
            </div>
            <div className={styles["navbar__darkmode-icon-wrapper"]}>
              <div
                className={styles["darkmode-icon"]}
                onClick={() => {
                  var newThemeValue = theme == "light" ? "dark" : "light";
                  setTheme(newThemeValue);

                  localStorage.setItem(
                    "lastfm_case_templatemode",
                    newThemeValue
                  );
                }}
                data-testid="darkmode-button"
              >
                <i className="fa-solid fa-moon"></i>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
