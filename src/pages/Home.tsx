import { NavButton } from "../components/NavButton";

import measureImage from "../images/app/measure.png";
import measureImprovement from "../images/app/improvement.png";

export const Home = (): React.JSX.Element => {
  return (
    <div className="h-screen grid grid-cols-2 items-center">
      <div className="flex justify-center">
        <NavButton img={measureImage} text="Measure Growth" />
      </div>
      <div className="flex justify-center">
        <NavButton img={measureImprovement} text="Measure Improvement" />
      </div>
    </div>
  );
};
