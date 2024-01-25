import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HoverButton } from "./HoverButton";

describe("HoverButton", () => {
  const mockClick = jest.fn();
  const textButton = (
    <HoverButton tailwindStyle="custom-class" text="Click Me" />
  );
  const hoverButton = (
    <HoverButton tailwindStyle="custom-class" text="Hover Me" />
  );

  it("renders with text", () => {
    render(textButton);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("renders with custom tailwind classes", () => {
    render(textButton);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("custom-class");
  });

  it("changes style on hover", () => {
    render(hoverButton);
    const button = screen.getByRole("button");
    fireEvent.mouseEnter(button);

    expect(button).toHaveStyle("filter: brightness(50%)");

    fireEvent.mouseLeave(button);
  });

  it("style reverts after hover", () => {
    render(hoverButton);
    const button = screen.getByRole("button");
    fireEvent.mouseEnter(button);

    fireEvent.mouseLeave(button);

    expect(button).toHaveStyle("filter: brightness(100%)");
  });

  it("handles click events", () => {
    render(
      <HoverButton
        tailwindStyle="custom-class"
        text="Click Me"
        click={mockClick}
      />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockClick).toHaveBeenCalled();
  });

  it("applies background image style if bgImg prop is provided", () => {
    const testImagePath = "path/to/image";
    render(
      <HoverButton tailwindStyle="" text="Image Button" bgImg={testImagePath} />
    );
    const button = screen.getByText("Image Button");

    // Verify the style includes the background image
    expect(button).toHaveStyle(`background-image: url(${testImagePath})`);
  });
});
