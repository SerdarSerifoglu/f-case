import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import styles from "./artistList.module.css";
import ListTitle from "../ListTitle/ListTitle";

const ITEMS_PER_PAGE = 30;

const ArtistList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const apiKey = process.env.REACT_APP_LASTFM_APIKEY;
  const apiUrl = `${process.env.REACT_APP_LASTFM_API_URL}?method=chart.gettopartists&api_key=${apiKey}&format=json&page=${page}&limit=${ITEMS_PER_PAGE}`;

  function fetchMoreItems() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((newItems) => {
        if (newItems.artists.artist.length === 0) {
          return;
        }
        setItems([...items, ...newItems.artists.artist]);
      });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchMoreItems();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <React.Fragment>
      <div onScroll={handleScroll} className={styles["artist-list"]}>
        <ListTitle title="Top Artists" />
        {items.map((e, i) => (
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
