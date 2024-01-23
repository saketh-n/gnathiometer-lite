import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavButton } from "./NavButton";

import measureImage from "../images/app/measure.png";

describe("NavButton", () => {
  // Unit Tests
  it("renders without errors", () => {
    render(<NavButton img={measureImage} text="Test Button" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("displays the correct text from props", () => {
    render(<NavButton img={measureImage} text="Test Button" />);
    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
  });

  // Styling or Responsive-ness Tests
  it("changes style correctly on hover", () => {
    render(<NavButton img={measureImage} text="Test Button" />);
    const button = screen.getByRole("button");
    fireEvent.mouseEnter(button);

    expect(button).toHaveStyle("filter: brightness(50%)");
  });

  it("style reverts after hover", () => {
    render(<NavButton img={measureImage} text="Test Button" />);
    const button = screen.getByRole("button");
    fireEvent.mouseEnter(button);

    fireEvent.mouseLeave(button);

    expect(button).toHaveStyle("filter: brightness(100%)");
  });
});
