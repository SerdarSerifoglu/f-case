import { useEffect, useState } from "react";
import Card from "../Card/Card";
import ListTitle from "../ListTitle/ListTitle";
import styles from "./trackList.module.css";

const TrackList = (params) => {
  const [items, setItems] = useState([]);

  const { artistId, artistName } = params;

  const apiKey = "007d8369d031d1645e0eba2eb1f053fb";

  function fetchTracks(apiUrl) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((items) => {
        setItems(items.toptracks.track);
      });
  }

  useEffect(() => {
    if (artistId) {
      var apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${artistId}&api_key=${apiKey}&format=json`;
    } else if (artistName) {
      var apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistName}&api_key=${apiKey}&format=json`;
    }
    fetchTracks(apiUrl);
  }, [artistId]);

  return (
    <>
      <div className={styles["track-list"]}>
        <ListTitle title="Top Tracks" />
        {items.map((e, i) => (
          <Card
            key={i}
            data={{ ...e, imageUrl: e.image[1]["#text"], type: "track" }}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default TrackList;
