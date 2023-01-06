import { useState } from "react";
import styles from "./app.module.css";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className={styles.main} data-theme={theme}>
        <div className={styles.test}>SERDAR</div>
      </div>
      <button
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        DARK MODE
      </button>
    </>
  );
}

export default App;
