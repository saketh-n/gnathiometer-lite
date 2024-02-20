import { Position } from "../../types/position";
import { growthPointX } from "./growthGuide";

export const lineWidth = 2;
export const angleLineColor = "red";
export const xAxisLineColor = "blue";
export const angleLabelColor = "black";
export const angleLabelFontSize = 36;

export const getAngleLabelPosition = (
  chinMarkerCenter: Position
): Position => ({
  x: (chinMarkerCenter.x + growthPointX.x) / 2,
  y: growthPointX.y - 10,
});
