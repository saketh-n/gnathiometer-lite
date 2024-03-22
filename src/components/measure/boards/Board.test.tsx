import { render, screen } from "@testing-library/react";
import { Board } from "./Board";

const renderBoard = () => {
  return render(
    <Board>
      <div>Test Child</div>
    </Board>
  );
};

describe("Board", () => {
  it("renders its children", () => {
    renderBoard();
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
