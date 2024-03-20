import { ReactNode } from "react";

type BoardProps = {
  children: ReactNode;
  enabled?: boolean;
};

/**
 * A container component using Tailwind CSS for layout and styling.
 * @param {ReactNode} props.children - The children elements to be rendered
 * inside the `Board` component.
 * @param {boolean} props.enabled - In certain scenarios the board should be
 * disabled
 * @returns {React.JSX.Element} The JSX element representing the board.
 */
export const Board = ({
  children,
  enabled = true,
}: BoardProps): React.JSX.Element => {
  const pointerEvents = enabled ? "pointer-events-auto" : "pointer-events-none";
  const tailwindStyle = `flex items-center justify-around ${pointerEvents} border-gray-300 bg-gray-200 border-4 rounded-md p-4 mt-4`;

  return (
    <div className={tailwindStyle} data-testid="board">
      {children}
    </div>
  );
};
