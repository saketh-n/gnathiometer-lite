import React from "react";
import { Position, defaultPosition } from "../types/position";

export type MeasureContextProps = {
  chinMarkerEnabled: boolean;
  chinMarkerPosition: Position;
  setChinMarkerPosition: React.Dispatch<React.SetStateAction<Position>>;
  instructionIndex: number;
  setInstructionIndex: React.Dispatch<React.SetStateAction<number>>;
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  scalingFactor: number;
  setScalingFactor: React.Dispatch<React.SetStateAction<number>>;
  afterImgSrc?: null | string;
  setAfterImgSrc?: React.Dispatch<React.SetStateAction<null | string>>;
};

const defaultContextValue = {
  chinMarkerEnabled: false,
  chinMarkerPosition: defaultPosition,
  setChinMarkerPosition: (() => {}) as React.Dispatch<
    React.SetStateAction<Position>
  >,
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
