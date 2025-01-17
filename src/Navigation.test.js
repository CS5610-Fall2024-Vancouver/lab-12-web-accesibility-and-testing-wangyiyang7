// Navigation.test.js
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("<Navigation />", () => {
  test("renders 3 links", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(3);
  });
});
