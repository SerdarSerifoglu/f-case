import styles from "./artistDetail.module.css";

import { useParams } from "react-router-dom";
import AlbumList from "./components/AlbumList";
import TrackList from "./components/TrackList";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const ArtistDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  var artistId = searchParams.get("artistId");
  var artistName = searchParams.get("artistName");

  const [artistInfo, setArtistInfo] = useState([]);
  const apiKey = "007d8369d031d1645e0eba2eb1f053fb";

  function fetchArtist(apiUrl) {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((items) => {
        setArtistInfo([items.artist]);
      });
  }

  useEffect(() => {
    if (artistId) {
      var apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${artistId}&api_key=${apiKey}&format=json`;
    } else if (artistName) {
      var apiUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`;
    }
    fetchArtist(apiUrl);
  }, [artistId, artistName]);

  return artistInfo.length > 0 ? (
    <>
      <div className={styles["artist-detail-title-wrapper"]}>
        <div className={styles["artist-detail-title"]}>
          <Card
            data={{
              mbid: artistInfo[0].mbid,
              name: artistInfo[0].name,
              imageUrl: artistInfo[0].image[1]["#text"],
              type: "title",
            }}
          />
        </div>
      </div>
      <div className={styles["artist-detail"]}>
        <div className={styles["artist-detail__albums"]}>
          <AlbumList artistId={artistId} artistName={artistName} />
        </div>
        <div className={styles["artist-detail__tracks"]}>
          <TrackList artistId={artistId} artistName={artistName} />
        </div>
      </div>
    </>
  ) : null;
};

export default ArtistDetail;
