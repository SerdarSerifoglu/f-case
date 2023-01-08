import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./albumList.module.css";
import ListTitle from "../ListTitle/ListTitle";

const AlbumList = (params) => {
  const [items, setItems] = useState([]);

  const { artistId, artistName } = params;

  const apiKey = "007d8369d031d1645e0eba2eb1f053fb";

  function fetchAlbums(apiUrl) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((items) => {
        setItems(items.topalbums.album);
      });
  }

  useEffect(() => {
    if (artistId) {
      var apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${artistId}&api_key=${apiKey}&format=json`;
    } else if (artistName) {
      var apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=${apiKey}&format=json`;
    }
    fetchAlbums(apiUrl);
  }, [artistId, artistName]);

  return (
    <>
      <div className={styles["album-list"]}>
        <ListTitle title="Top Albums" />
        {items.map((e, i) => (
          <Card
            key={i}
            data={{ ...e, imageUrl: e.image[1]["#text"], type: "album" }}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default AlbumList;
