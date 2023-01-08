import ListTitle from "../components/ListTitle";

export default {
  title: "Example/ListTitle",
  component: ListTitle,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <ListTitle title="Top Albums" />;

export const AlbumTitle = Template.bind({});
