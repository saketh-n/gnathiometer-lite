import { useLocation } from "react-router-dom";
import { useState } from "react";

import { GrowthGuide } from "./measure/GrowthGuide";
import { ImageTransform } from "./measure/ImageTransform";
import { NavBar } from "./measure/NavBar";
import { PatientImage } from "./measure/PatientImage";

import {
  growthInstructions as instructions,
  getChinMarkerIndex,
} from "../helpers/constants/instructions";
import {
  MeasureContext,
  MeasureContextProps,
} from "../contexts/MeasureContext";
import { Position, defaultPosition } from "../types/position";

interface LocationState {
  image?: string;
}

/**
 * Lets you measure the precise amount of forward
 * growth of a patient's face. Can scale and rotate patient image as needed to
 * get a precise fit to the Growth Guide
 * @returns {React.JSX.Element} Measure Forward Growth
 */
export const Measure = (): React.JSX.Element => {
  const { state } = useLocation();
  const imageSrc = (state as LocationState)?.image;

  const [rotation, setRotation] = useState<number>(0);
  const [scalingFactor, setScalingFactor] = useState<number>(1.0);
  const [instructionIndex, setInstructionIndex] = useState<number>(0);

  const chinMarkerIndex = getChinMarkerIndex(instructions);
  const chinMarkerEnabled = instructionIndex >= chinMarkerIndex;
  const [chinMarkerPosition, setChinMarkerPosition] =
    useState<Position>(defaultPosition);

  const measureProps: MeasureContextProps = {
    chinMarkerEnabled,
    chinMarkerPosition,
    setChinMarkerPosition,
    instructionIndex,
    setInstructionIndex,
    rotation,
    setRotation,
    scalingFactor,
    setScalingFactor,
  };

  return (
    <MeasureContext.Provider value={measureProps}>
      <NavBar priorRoute="/upload-growth" />
      <div className="flex justify-center items-center">
        {imageSrc && (
          <div className="z-10 flex-shrink-0 relative pointer-events-none user-select-none">
            <GrowthGuide />
            <ImageTransform />
          </div>
        )}
        <PatientImage img={imageSrc} />
      </div>
    </MeasureContext.Provider>
  );
};
