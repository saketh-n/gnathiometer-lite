import { useNavigate } from "react-router-dom";
import { growthInstructions as instructions } from "../../helpers/constants/instructions";
import { useContext } from "react";
import { MeasureContext } from "../../contexts/MeasureContext";

type NavBarProps = {
  priorRoute: string;
};

/**
 * NavBar component provides navigation controls with back and forward buttons
 * and displays instructional text. It's designed to be used at the top of pages
 * that require user navigation or guidance.
 * @param {string} priorRoute Where to navigate to if you press back on the first
 * instruction
 * @returns {React.JSX.Element} A navigation bar with back and forward buttons
 * and a central text.
 */
export const NavBar = ({ priorRoute }: NavBarProps): React.JSX.Element => {
  const navigate = useNavigate();

  const { instructionIndex: index, setInstructionIndex: setIndex } =
    useContext(MeasureContext);

  const handleNext = () => {
    if (index < instructions.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      navigate(priorRoute);
    }
  };

  return (
    <div className="z-10 relative flex items-center justify-between p-4 bg-gray-300 border-b border-gray-200">
      <button
        className="text-blue-600 hover:text-blue-800"
        onClick={handleBack}
        data-testid="navbar-back"
      >
        ← Back
      </button>
      <p className="text-sm text-gray-700">{instructions[index]}</p>
      <button
        className="text-blue-600 hover:text-blue-800"
        onClick={handleNext}
        data-testid="navbar-next"
      >
        Next →
      </button>
    </div>
  );
};
