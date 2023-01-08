import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("Dark Mode Button Tests", () => {
  render(<Layout />);

  const buttonEl = screen.getByTestId("darkmode-button");
  expect(buttonEl).toBeInTheDocument();

  screen.debug();
});
