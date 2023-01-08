import styles from "./artistDetail.module.css";

import { useParams } from "react-router-dom";
import AlbumList from "./components/AlbumList";
import TrackList from "./components/TrackList";
import { useLocation, useSearchParams } from "react-router-dom";

const ArtistDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  var artistId = searchParams.get("artistId");
  var artistName = searchParams.get("artistName");

  return (
    <>
      <div className={styles["artist-detail"]}>
        <div className={styles["artist-detail__albums"]}>
          <AlbumList artistId={artistId} artistName={artistName} />
        </div>
        <div className={styles["artist-detail__tracks"]}>
          <TrackList artistId={artistId} artistName={artistName} />
        </div>
      </div>
    </>
  );
};

export default ArtistDetail;
