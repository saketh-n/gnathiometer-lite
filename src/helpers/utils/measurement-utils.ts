import { Position } from "../../types/position";
import { getChinMarkerCenter } from "../constants/chinMarker";
import {
  growthOrigin,
  growthPointX,
  pixelsPerMM,
  zeroDegree,
} from "../constants/growthGuide";
import {
  angleLabelFontSize,
  measurementSpacing,
} from "../constants/measurement";
import {
  scaleVector,
  pointToVector,
  magnitude,
  computeAngle,
} from "./vector-utils";

type MeasurementValues = {
  chinMarkerCenter: Position;
  angleLabel: string;
  angleLabelPosition: Position;
  angleLineMagnitude: number;
  gnathionPosition: Position;
  gnathionLabelPosition: Position;
  gnathionPositionLabel: string;
};

/**
 *
 * @param chinMarkerPosition Top Left corner of chinMarker
 * @returns all the relevant values needed for calculating and displaying
 * gnathion measurements
 */
export const getMeasurementValues = (
  chinMarkerPosition: Position
): MeasurementValues => {
  const chinMarkerCenter = getChinMarkerCenter(chinMarkerPosition);
  const angleLabel = `${getAngle(chinMarkerCenter).toFixed(2)}°`;

  const angleLabelPosition = getAngleLabelPosition(chinMarkerCenter);

  const angleLineMagnitude = getAngleLineMagnitude(chinMarkerCenter);

  const gnathionPosition: Position = getGnathionPosition(chinMarkerCenter);

  const gnathionLabelPosition: Position =
    getGnathionLabelPosition(angleLabelPosition);

  const gnathionPositionLabel = getGnathionPositionLabel(gnathionPosition);

  return {
    chinMarkerCenter,
    angleLabel,
    angleLabelPosition,
    angleLineMagnitude,
    gnathionPosition,
    gnathionLabelPosition,
    gnathionPositionLabel,
  };
};

/**
 *
 * @param chinMarkerCenter position of the center of chin marker's red dot
 * relative to top left of growth guide
 * @returns Where to place the text displaying the angle info
 */
export const getAngleLabelPosition = (
  chinMarkerCenter: Position
): Position => ({
  x: (chinMarkerCenter.x + growthPointX.x) / 2,
  y: growthPointX.y - 10,
});

/**
 *
 * @param chinMarkerCenter position of the center of chin marker's red dot
 * relative to top left of growth guide
 * @returns Length of line from growthPointX to chinMarkerCenter in pixels
 */
export const getAngleLineMagnitude = (chinMarkerCenter: Position): number => {
  return magnitude(pointToVector(growthPointX, chinMarkerCenter));
};

/**
 *
 * @param chinMarkerCenter position of the center of chin marker's red dot
 * relative to top left of growth guide
 * zero degree functions as a vector pointing along the positive x-axis
 * growthPointX through chinMarkerCenter helps us determine
 * the angle of the gnathion
 * @returns angle of gnathion
 */
export const getAngle = (chinMarkerCenter: Position): number => {
  return computeAngle(growthPointX, chinMarkerCenter, zeroDegree);
};

/**
 *
 * @param chinMarkerCenter position of the center of chin marker's red dot
 * relative to top left of growth guide
 * @returns Gnathion Position relative to growth Origin point, scaled to MM
 */
export const getGnathionPosition = (chinMarkerCenter: Position): Position => {
  return scaleVector(
    pointToVector(growthOrigin, chinMarkerCenter),
    1 / pixelsPerMM
  );
};

/**
 *
 * @param angleLabelPosition Position of angle's label
 * @returns Gnathion Label, e.g ( X Horizontal MM, Y Vertical MM)
 */
export const getGnathionLabelPosition = (
  angleLabelPosition: Position
): Position => {
  // TODO: More sensible positioning later
  const x = angleLabelPosition.x - 300;
  const y = angleLabelPosition.y - angleLabelFontSize - measurementSpacing;

  return { x, y };
};

/**
 *
 * @param gnathionPosition The position of the gnathion relative to the
 * growth origin point (in MM)
 * @returns properly formatted display of gnathion position
 */
export const getGnathionPositionLabel = (
  gnathionPosition: Position
): string => {
  return `Gnathion Position (Horizontal: 
    ${gnathionPosition.x.toFixed(2)} MM, Vertical: 
    ${gnathionPosition.y.toFixed(2)} MM)`;
};
