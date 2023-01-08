import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ArtistList from "./ArtistList";

test("renders artist list", async () => {
  render(<ArtistList />);

  await waitFor(() => screen.getByText("Top Artists"));

  const artistList = screen.getByText("Top Artists");
  expect(artistList).toBeInTheDocument();

  await waitFor(() => {
    const artistCards = screen.getAllByTestId("card");
    expect(artistCards.length).toBeGreaterThan(0);
  });
});
