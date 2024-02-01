import React from "react";
import { screen, render } from "@testing-library/react";
import { Measure } from "./Measure";
import { MemoryRouter } from "react-router-dom";

type TestLocationState = {
  state?: {
    image?: string;
  };
};

describe("MeasureGrowth Integration Tests", () => {
  const renderMeasureWithState = (initialState?: TestLocationState): void => {
    render(
      <MemoryRouter initialEntries={initialState ? [initialState] : [{}]}>
        <Measure />
      </MemoryRouter>
    );
  };

  const initialState = {
    state: {
      image: "test-image-url",
    },
  };

  it("renders PatientImage with provided image source", () => {
    renderMeasureWithState(initialState);
    const image = screen.getByAltText("Patient");
    expect(image).toHaveAttribute("src", "test-image-url");
  });

  it("renders no image when imageSrc is not provided", () => {
    renderMeasureWithState();
    expect(screen.queryByAltText("Patient")).not.toBeInTheDocument();
  });

  it("renders GrowthGuide provided imageSrc", () => {
    renderMeasureWithState(initialState);
    expect(screen.getByAltText("Growth Guide")).toBeInTheDocument();
  });

  it("renders no GrowthGuide without imageSrc", () => {
    renderMeasureWithState();
    expect(screen.queryByAltText("Growth Guide")).not.toBeInTheDocument();
  });

  it("renders Image Rotation slider provided imageSrc", () => {
    renderMeasureWithState(initialState);
    expect(screen.getByText("Angle")).toBeInTheDocument();
  });

  it("renders no Image Rotation slider without imageSrc", () => {
    renderMeasureWithState();
    expect(screen.queryByText("Angle")).not.toBeInTheDocument();
  });
});
