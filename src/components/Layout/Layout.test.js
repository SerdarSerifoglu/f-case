import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import userEvent from "@testing-library/user-event";

test("Dark Mode Button Tests", () => {
  render(<Layout />);

  const buttonEl = screen.getByTestId("darkmode-button");
  expect(buttonEl).toBeInTheDocument();
});
