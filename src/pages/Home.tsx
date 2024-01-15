import { NavButton } from "../components/NavButton";

import measureImage from "../images/app/measure.png";
import measureImprovement from "../images/app/improvement.png";

/**
 *
 * @returns Gnathiometer Main Screen - users can select which of the two
 * functions they would like to use (Measure Growth or Measure Improvement)
 */
export const Home = (): React.JSX.Element => {
  return (
    <div className="h-screen grid md:grid-cols-2 items-center">
      <div className="flex justify-center items-center h-1/2">
        <NavButton img={measureImage} text="Measure Growth" />
      </div>
      <div className="flex justify-center items-center h-1/2">
        <NavButton img={measureImprovement} text="Measure Improvement" />
      </div>
    </div>
  );
};
