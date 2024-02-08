import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import { growthInstructions as instructions } from "../../helpers/instructions";

describe("NavBar Component", () => {
  const priorRoute = "/upload-growth";

  const renderNavBar = (): void => {
    render(
      <MemoryRouter>
        <NavBar priorRoute={priorRoute} />
      </MemoryRouter>
    );
  };

  it("initially displays the first instruction", () => {
    renderNavBar();
    expect(screen.getByText(instructions[0])).toBeInTheDocument();
  });

  it("displays the second instruction after 'Next' is clicked", () => {
    renderNavBar();
    const nextButton = screen.getByTestId("navbar-next");
    expect(nextButton).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByText(instructions[1])).toBeInTheDocument();
  });

  it("returns to the first instruction when 'Back' is clicked after 'Next'", () => {
    renderNavBar();
    const nextButton = screen.getByTestId("navbar-next");
    expect(nextButton).toBeInTheDocument();
    const backButton = screen.getByTestId("navbar-back");
    expect(backButton).toBeInTheDocument();
    fireEvent.click(nextButton);
    fireEvent.click(backButton);
    expect(screen.getByText(instructions[0])).toBeInTheDocument();
  });
});
