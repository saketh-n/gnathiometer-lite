import { ReactNode } from "react";

type BoardProps = {
  children: ReactNode;
};

/**
 * A container component using Tailwind CSS for layout and styling.
 * @param {ReactNode} props.children - The children elements to be rendered
 * inside the `Board` component.
 * @returns {React.JSX.Element} The JSX element representing the board.
 */
export const Board = ({ children }: BoardProps): React.JSX.Element => {
  const tailwindStyle = `flex items-center justify-center border-gray-300 bg-gray-200 border-4 rounded-md p-4 mt-4 max-w-lg mx-auto space-x-8`;

  return (
    <div className={tailwindStyle} data-testid="board">
      {children}
    </div>
  );
};
