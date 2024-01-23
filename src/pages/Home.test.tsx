import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Home } from "./Home";

describe("Home", () => {
  it("renders correctly without crashing", () => {
    render(<Home />);
    expect(screen.getByText("Measure Growth")).toBeInTheDocument();
    expect(screen.getByText("Measure Improvement")).toBeInTheDocument();
  });
});
