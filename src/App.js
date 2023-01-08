import { useState } from "react";

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
