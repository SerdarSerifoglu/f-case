import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Card from "./Card";
import styles from "./artistList.module.css";

const ArtistList = () => {
  const apiKey = "007d8369d031d1645e0eba2eb1f053fb";
  const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`;

  const { data, status } = useQuery("artistListTest", () =>
    fetch(apiUrl).then((res) => res.json())
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error: </p>;

  return (
    <React.Fragment>
      <div className={styles["artist-list"]}>
        {data.artists.artist.map((e, i) => (
          <Card
            key={i}
            data={{ ...e, imageUrl: e.image[2]["#text"], type: "artist" }}
          ></Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ArtistList;
