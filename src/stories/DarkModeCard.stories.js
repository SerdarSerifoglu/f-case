import Card from "../components/Card";
import { cardTypes } from "../utils/statics";

export default {
  title: "Example/Cards-DarkMode",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
};
const DarkTemplate = (args) => (
  <div data-theme="dark">
    <Card data={args} />
  </div>
);

export const ArtistCard = DarkTemplate.bind({});
ArtistCard.args = {
  mbid: "1234",
  name: "Taylor Swift",
  type: cardTypes.artist,
  imageUrl:
    "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
  playcount: "1090681006",
  listeners: "3714801",
};

export const AlbumCard = DarkTemplate.bind({});
AlbumCard.args = {
  mbid: "1234",
  name: "Fearless",
  type: cardTypes.album,
  author: "Taylor Swift",
  imageUrl:
    "https://lastfm.freetls.fastly.net/i/u/174s/d8888f990ce044e4c856550a7041c83e.png",
  playcount: 25385887,
};

export const DarkTrackCard = DarkTemplate.bind({});
DarkTrackCard.args = {
  mbid: "1234",
  name: "Love Story",
  type: cardTypes.track,
  author: "Taylor Swift",
  imageUrl:
    "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
  playcount: 25385887,
  listeners: "955631",
};

export const DarkTitleCard = DarkTemplate.bind({});
DarkTitleCard.args = {
  mbid: "1234",
  name: "Taylor Swift",
  type: cardTypes.title,
  imageUrl:
    "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
};
