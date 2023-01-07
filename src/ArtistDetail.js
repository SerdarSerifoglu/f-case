import { useParams } from "react-router-dom";

const ArtistDetail = () => {
  let { artistId } = useParams();
  return <>ARTIST DETAIL - {artistId}</>;
};

export default ArtistDetail;
