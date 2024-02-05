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
    expect(screen.getByTestId("measure-growth")).toBeInTheDocument();
    expect(screen.getByTestId("measure-improvement")).toBeInTheDocument();
  });
});
