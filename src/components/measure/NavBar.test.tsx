import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import { growthInstructions as instructions } from "../../helpers/constants/instructions";

const priorRoute = "/upload-growth";

/**
 * This setup is especially useful for testing scenarios where you need to simulate
 * useState, since you cannot use useState hooks in tests
 *
 * @returns {React.JSX.Element} A wrapped `NavBar` component with state control for the active index,
 * enclosed within a `MemoryRouter` for navigation simulation.
 */
const NavBarWrapper = (): React.JSX.Element => {
  const [index, setIndex] = useState(0);
  return (
    <MemoryRouter>
      <NavBar priorRoute={priorRoute} index={index} setIndex={setIndex} />
    </MemoryRouter>
  );
};

describe("NavBar Component", () => {
  const renderNavBar = (): void => {
    render(<NavBarWrapper />);
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
