import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { MemoryRouter } from "react-router-dom";
import { growthInstructions as instructions } from "../../helpers/constants/instructions";
import { MockMeasureProvider } from "../../contexts/MockMeasureContext";

const priorRoute = "/upload-growth";

/**
 * @returns {React.JSX.Element} A wrapped `NavBar` component useful for testing purposes.
 */
const NavBarWrapper = (): React.JSX.Element => {
  return (
    <MemoryRouter>
      <MockMeasureProvider>
        <NavBar priorRoute={priorRoute} />
      </MockMeasureProvider>
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
