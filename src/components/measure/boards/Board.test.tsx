import { render, screen } from "@testing-library/react";
import { Board } from "./Board";

const renderBoard = (enabled?: boolean) => {
  return render(
    <Board {...(enabled !== undefined && { enabled })}>
      <div>Test Child</div>
    </Board>
  );
};

describe("Board", () => {
  it("renders its children", () => {
    renderBoard();
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("is enabled by default", () => {
    renderBoard();
    const board = screen.getByTestId("board");
    expect(board).toHaveClass("pointer-events-auto");
    expect(board).not.toHaveClass("pointer-events-none");
  });

  it("can be disabled", () => {
    renderBoard(false);
    const board = screen.getByTestId("board");
    expect(board).toHaveClass("pointer-events-none");
    expect(board).not.toHaveClass("pointer-events-auto");
  });
});
