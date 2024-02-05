import React from "react";
import { render, screen } from "@testing-library/react";
import { Upload } from "./Upload";
import { MemoryRouter } from "react-router-dom";

describe("Upload Component", () => {
  const mockProps = {
    title: "Test Title",
    instructions: ["Instruction 1", "Instruction 2"],
    img: "test-image.jpg",
    submitText: "Submit",
    route: "/test-route",
  };

  const dummyComponent = (
    <MemoryRouter>
      <Upload {...mockProps} />
    </MemoryRouter>
  );

  it("renders without crashing", () => {
    render(dummyComponent);
    expect(screen.getByTestId("ref-image")).toBeInTheDocument();
  });

  it("displays correct title", () => {
    render(dummyComponent);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("displays correct submit text", () => {
    render(dummyComponent);
    expect(screen.getByText(mockProps.submitText)).toBeInTheDocument();
  });

  it("displays the correct instructions", () => {
    render(dummyComponent);
    mockProps.instructions.forEach((instruction) => {
      expect(screen.getByText(instruction)).toBeInTheDocument();
    });
  });
});
