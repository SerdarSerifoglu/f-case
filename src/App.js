import { useState } from "react";
import styles from "./app.module.css";

import ArtistList from "./components/ArtistList";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <button
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        DARK MODE
      </button>
      <div className={styles.main} data-theme={theme}>
        <ArtistList></ArtistList>
      </div>
    </>
  );
}

export default App;
