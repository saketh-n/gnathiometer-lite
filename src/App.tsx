import { NavButton } from "./components/NavButton";

import measureImage from "./images/app/measure.png";
import measureImprovement from "./images/app/improvement.png";

export const App = (): React.JSX.Element => {
  return (
    <>
      <NavButton img={measureImage} text="Measure Growth" />
      <NavButton img={measureImprovement} text="Measure Improvement" />
    </>
  );
};
