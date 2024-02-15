import React from "react";

export type MeasureContextProps = {
  chinMarkerEnabled: boolean;
  instructionIndex: number;
  setInstructionIndex: React.Dispatch<React.SetStateAction<number>>;
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  scalingFactor: number;
  setScalingFactor: React.Dispatch<React.SetStateAction<number>>;
};

const defaultContextValue = {
  chinMarkerEnabled: false,
  instructionIndex: 0,
  setInstructionIndex: (() => {}) as React.Dispatch<
    React.SetStateAction<number>
  >,
  rotation: 0,
  setRotation: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
  scalingFactor: 1,
  setScalingFactor: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
};

export const MeasureContext =
  React.createContext<MeasureContextProps>(defaultContextValue);
