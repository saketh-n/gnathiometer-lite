import React from "react";
import { render, screen } from "@testing-library/react";
import { ChinMarker } from "./ChinMarker";

describe("ChinMarker", () => {
  test("renders correctly", () => {
    render(<ChinMarker />);
    const markerElement = screen.getByTestId("chin-marker");
    expect(markerElement).toBeInTheDocument();
  });
});
