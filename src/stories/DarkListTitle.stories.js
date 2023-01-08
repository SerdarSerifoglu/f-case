import ListTitle from "../components/ListTitle";

export default {
  title: "Example/ListTitle-DarkMode",
  component: ListTitle,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <div data-theme="dark">
    <ListTitle title="Top Albums" />
  </div>
);

export const AlbumTitle = Template.bind({});
