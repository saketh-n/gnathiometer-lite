import React from "react";
import { screen, render } from "@testing-library/react";
import { PatientImage, PatientImageProps } from "./PatientImage";
import { MemoryRouter } from "react-router-dom";
import { MockMeasureProvider } from "../../contexts/MockMeasureContext";

/**
 * @param props
 * @returns PatientImage wrapped in MemoryRouter, as a surrounding Router is
 * needed for correct test behavior
 */
const PatientImageWrapper = (props: PatientImageProps): React.JSX.Element => {
  return (
    <MemoryRouter>
      <PatientImage {...props} />
    </MemoryRouter>
  );
};

describe("PatientImage Unit Tests", () => {
  it("renders image with correct src and alt text", () => {
    render(<PatientImageWrapper img="test-image-url" />);
    const image = screen.getByTestId("patient-image");
    expect(image).toHaveAttribute("src", "test-image-url");
  });

  it("applies correct style for rotation and scaling", () => {
    render(
      <MockMeasureProvider initialContext={{ rotation: 90, scalingFactor: 2 }}>
        <PatientImageWrapper img="test-image-url" />
      </MockMeasureProvider>
    );
    const image = screen.getByTestId("patient-image");
    expect(image).toHaveStyle("transform: rotate(90deg) scale(2)");
  });

  it("renders fallback UI when no image is provided", () => {
    render(<PatientImageWrapper />);
    expect(screen.getByTestId("not-found-text")).toBeInTheDocument();
  });
});
