import React from "react";
import { screen, render } from "@testing-library/react";
import { PatientImage } from "./PatientImage";
import { MemoryRouter } from "react-router-dom";

describe("PatientImage Unit Tests", () => {
  it("renders image with correct src and alt text", () => {
    render(<PatientImage img="test-image-url" />);
    const image = screen.getByTestId("patient-image");
    expect(image).toHaveAttribute("src", "test-image-url");
  });

  it("applies correct style for rotation and scaling", () => {
    render(
      <PatientImage img="test-image-url" rotation={90} scalingFactor={2} />
    );
    const image = screen.getByTestId("patient-image");
    expect(image).toHaveStyle("transform: rotate(90deg) scale(2)");
  });

  it("renders fallback UI when no image is provided", () => {
    render(
      <MemoryRouter>
        <PatientImage />
      </MemoryRouter>
    );
    expect(screen.getByTestId("not-found-text")).toBeInTheDocument();
  });
});
