import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./albumList.module.css";
import ListTitle from "../ListTitle/ListTitle";

const AlbumList = (params) => {
  const [items, setItems] = useState([]);

  const { artistId, artistName } = params;

  const apiKey = process.env.REACT_APP_LASTFM_APIKEY;

  function fetchAlbums(apiUrl) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((items) => {
        setItems(items.topalbums.album);
      });
  }

  useEffect(() => {
    if (artistId) {
      var apiUrl = `${process.env.REACT_APP_LASTFM_API_URL}?method=artist.gettopalbums&mbid=${artistId}&api_key=${apiKey}&format=json`;
    } else if (artistName) {
      var apiUrl = `${process.env.REACT_APP_LASTFM_API_URL}?method=artist.gettopalbums&artist=${artistName}&api_key=${apiKey}&format=json`;
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
