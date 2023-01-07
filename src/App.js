import { useState } from "react";
import styles from "./app.module.css";

import ArtistList from "./components/ArtistList";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ArtistList></ArtistList>
    </>
  );
}

export default App;
