import styles from "./artistDetail.module.css";

import { useParams } from "react-router-dom";
import AlbumList from "./components/AlbumList";
import TrackList from "./components/TrackList";

const ArtistDetail = () => {
  let { artistId } = useParams();
  return (
    <>
      <div className={styles["artist-detail"]}>
        <div className={styles["artist-detail__albums"]}>
          <AlbumList artistId={artistId} />
        </div>
        <div className={styles["artist-detail__tracks"]}>
          <TrackList artistId={artistId} />
        </div>
      </div>
    </>
  );
};

export default ArtistDetail;
