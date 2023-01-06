import { useState } from "react";
import styles from "./app.module.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import ArtistList from "./components/ArtistList";

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
