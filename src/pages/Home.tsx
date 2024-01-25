import { NavButton } from "../components/buttons/NavButton";

import measureImage from "../images/app/measure.png";
import measureImprovement from "../images/app/improvement.png";

/**
 *
 * @returns {React.JSX.Element} Gnathiometer Main Screen - users can select which of the two
 * functions they would like to use (Measure Growth or Measure Improvement)
 */
export const Home = (): React.JSX.Element => {
  return (
    <div className="h-screen grid md:grid-cols-2 items-center">
      <div className="flex justify-center items-center h-1/2">
        <NavButton
          img={measureImage}
          text="Measure Growth"
          route="/upload-growth"
        />
      </div>
      <div className="flex justify-center items-center h-1/2">
        <NavButton
          img={measureImprovement}
          text="Measure Improvement"
          route="/upload-improvement"
        />
      </div>
    </div>
  );
};
