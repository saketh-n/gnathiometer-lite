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
    const image = screen.getByTestId("patient-image");
    expect(image).toHaveAttribute("src", "test-image-url");
  });

  it("renders no image when imageSrc is not provided", () => {
    renderMeasureWithState();
    expect(screen.queryByTestId("patient-image")).not.toBeInTheDocument();
  });

  it("renders GrowthGuide provided imageSrc", () => {
    renderMeasureWithState(initialState);
    expect(screen.getByTestId("growth-guide")).toBeInTheDocument();
  });

  it("renders no GrowthGuide without imageSrc", () => {
    renderMeasureWithState();
    expect(screen.queryByTestId("growth-guide")).not.toBeInTheDocument();
  });

  it("renders Image Rotation slider provided imageSrc", () => {
    renderMeasureWithState(initialState);
    expect(screen.getByTestId("image-rotate")).toBeInTheDocument();
  });

  it("renders no Image Rotation slider without imageSrc", () => {
    renderMeasureWithState();
    expect(screen.queryByTestId("image-rotate")).not.toBeInTheDocument();
  });

  it("renders Scale Image provided imageSrc", () => {
    renderMeasureWithState(initialState);
    expect(screen.getByTestId("scale-image")).toBeInTheDocument();
  });

  it("renders no Scale Image without imageSrc", () => {
    renderMeasureWithState();
    expect(screen.queryByTestId("scale-image")).not.toBeInTheDocument();
  });
});
