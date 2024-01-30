import { useLocation } from "react-router-dom";
import { PatientImage } from "./measure/PatientImage";
import { GrowthGuide } from "./measure/GrowthGuide";
import { RotateImage } from "./measure/RotateImage";
import { useState } from "react";

interface LocationState {
  image?: string;
}

/**
 *
 * @returns {React.JSX.Element} Lets you measure the precise amount of forward
 * growth of a patient's face. Can scale and rotate patient image as needed to
 * get a precise fit to the Growth Guide
 */
export const Measure = (): React.JSX.Element => {
  const location = useLocation();
  const imageSrc = (location.state as LocationState)?.image;
  const [rotation, setRotation] = useState(0);

  return (
    <div>
      <div className="flex justify-center items-center">
        {imageSrc && <GrowthGuide />}
        <PatientImage img={imageSrc} rotation={rotation} />
      </div>
      <RotateImage setRotation={setRotation} />
    </div>
  );
};
