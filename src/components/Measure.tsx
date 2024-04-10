import { useLocation } from "react-router-dom";
import { useState } from "react";
import { PatientImage } from "./measure/PatientImage";

import {
  measureGrowthInstructions as instructions,
  measureGrowthInstructions,
} from "../helpers/constants/instructions";
import {
  getChinMarkerIndex,
  isFinalInstruction,
} from "../helpers/utils/instruction-utils";
import {
  MeasureContext,
  MeasureContextProps,
} from "../contexts/MeasureContext";
import { Position, defaultPosition } from "../types/position";
import { NavBar } from "./measure/NavBar";
import {
  getAngleImprovementLabel,
  getGnathionImprovementLabel,
} from "../helpers/utils/measurement-utils";

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

  const useMeasureContext = (
    after?: boolean,
    setBeforeImgSrc?: React.Dispatch<React.SetStateAction<null | string>>
  ): MeasureContextProps => {
    const chinMarkerIndex = getChinMarkerIndex(instructions);

    const [rotation, setRotation] = useState<number>(0);
    const [scalingFactor, setScalingFactor] = useState<number>(1.0);
    const [instructionIndex, setInstructionIndex] = useState<number>(0);
    const chinMarkerEnabled = instructionIndex >= chinMarkerIndex;
    const [chinMarkerPosition, setChinMarkerPosition] =
      useState<Position>(defaultPosition);
    const [afterImgSrc, setAfterImgSrc] = useState<null | string>(null);
    const [gnathionAngle, setGnathionAngle] = useState(0);
    const [gnathionMM, setGnathionMM] = useState<Position>(defaultPosition);

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
      afterImgSrc,
      setAfterImgSrc,
      after,
      gnathionAngle,
      setGnathionAngle,
      gnathionMM,
      setGnathionMM,
    };

    if (after) {
      measureProps.setAfterImgSrc = setBeforeImgSrc;
    }

    return measureProps;
  };

  const beforeMeasureContext: MeasureContextProps = useMeasureContext();
  const afterMeasureContext: MeasureContextProps = useMeasureContext(
    true,
    beforeMeasureContext.setAfterImgSrc
  );

  const { afterImgSrc } = beforeMeasureContext;
  const finalInstruction = isFinalInstruction(
    afterMeasureContext.instructionIndex,
    measureGrowthInstructions
  );

  return (
    <>
      <MeasureContext.Provider
        value={afterImgSrc ? afterMeasureContext : beforeMeasureContext}
      >
        <NavBar />
      </MeasureContext.Provider>
      <div className="flex justify-center items-center flex-row space-x-8">
        <MeasureContext.Provider value={beforeMeasureContext}>
          <PatientImage img={imageSrc} />
        </MeasureContext.Provider>
        {afterImgSrc && (
          <MeasureContext.Provider value={afterMeasureContext}>
            <PatientImage img={afterImgSrc} />
          </MeasureContext.Provider>
        )}
      </div>
      {finalInstruction && (
        <div className="flex justify-center items-center flex-row space-x-8 text-3xl">
          <div className="flex flex-col z-40">
            <div>
              {getAngleImprovementLabel(
                beforeMeasureContext.gnathionAngle,
                afterMeasureContext.gnathionAngle
              )}
            </div>
            <div>
              {getGnathionImprovementLabel(
                beforeMeasureContext.gnathionMM,
                afterMeasureContext.gnathionMM
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
