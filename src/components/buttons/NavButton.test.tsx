import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavButton } from "./NavButton";
import { MemoryRouter } from "react-router-dom";

describe("NavButton", () => {
  const dummyButton = (
    <MemoryRouter>
      <NavButton img={"dummy-path"} text="Test Button" route="/" />
    </MemoryRouter>
  );

  // Unit Tests
  it("renders without errors", () => {
    render(dummyButton);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("displays the correct text from props", () => {
    render(dummyButton);
    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
  });
});
