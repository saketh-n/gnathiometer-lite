import { useLocation } from "react-router-dom";
import { PatientImage } from "./measure/PatientImage";
import { GrowthGuide } from "./measure/GrowthGuide";
import { RotateImage } from "./measure/RotateImage";
import { useState } from "react";
import { ScaleImage } from "./measure/ScaleImage";
import { NavBar } from "./measure/NavBar";
import {
  growthInstructions as instructions,
  getChinMarkerIndex,
} from "../helpers/constants/instructions";
import { ChinMarker } from "./measure/ChinMarker";

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
  const [scalingFactor, setScalingFactor] = useState(1.0);
  const [instructionIndex, setInstructionIndex] = useState(0);
  const chinMarkerIndex = getChinMarkerIndex(instructions);

  const imageTransformBoardStyle =
    "flex items-center justify-around pointer-events-auto border-gray-300 bg-gray-200 border-4 rounded-md p-4 mt-4";

  return (
    <>
      <NavBar
        priorRoute="/upload-growth"
        index={instructionIndex}
        setIndex={setInstructionIndex}
      />
      <div className="flex justify-center items-center">
        {imageSrc && (
          <div className="z-10 flex-shrink-0 relative pointer-events-none user-select-none">
            <GrowthGuide />
            <div className={imageTransformBoardStyle}>
              <RotateImage setRotation={setRotation} />
              <ScaleImage
                scalingFactor={scalingFactor}
                setScalingFactor={setScalingFactor}
              />
            </div>
          </div>
        )}
        <PatientImage
          img={imageSrc}
          rotation={rotation}
          scalingFactor={scalingFactor}
        />
        {instructionIndex >= chinMarkerIndex && <ChinMarker />}
      </div>
    </>
  );
};
