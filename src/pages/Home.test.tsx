import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
  it("renders correctly without crashing", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Measure Growth")).toBeInTheDocument();
    expect(screen.getByText("Measure Improvement")).toBeInTheDocument();
  });
});
