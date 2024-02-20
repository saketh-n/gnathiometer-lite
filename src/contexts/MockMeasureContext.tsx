// Mock context for testing components that consume MeasureContext

import React, { ReactNode, useState } from "react";

import { MeasureContextProps, MeasureContext } from "./MeasureContext";

import { defaultPosition } from "../types/position";

type MockMeasureProviderProps = {
  children: ReactNode;
  initialContext?: Partial<MeasureContextProps>;
};

export const MockMeasureProvider = ({
  children,
  initialContext = {},
}: MockMeasureProviderProps): React.JSX.Element => {
  const [instructionIndex, setInstructionIndex] = useState(
    initialContext.instructionIndex || 0
  );
  const [rotation, setRotation] = useState(initialContext.rotation || 0);
  const [scalingFactor, setScalingFactor] = useState(
    initialContext.scalingFactor || 1
  );
  const [chinMarkerPosition, setChinMarkerPosition] = useState(
    initialContext.chinMarkerPosition || defaultPosition
  );

  const testContext: MeasureContextProps = {
    chinMarkerEnabled: initialContext.chinMarkerEnabled || false,
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
    <MeasureContext.Provider value={testContext}>
      {children}
    </MeasureContext.Provider>
  );
};
