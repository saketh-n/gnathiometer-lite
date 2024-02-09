/**
 * Defines styling constants and functions for dynamic line and dot styling
 * for the chin marker
 */

import { pixelsPerMM } from "./growthGuide";

const lineHeight = pixelsPerMM;
const lineWidth = lineHeight * 10;
export const gap = lineWidth / 2;
export const dotSize = pixelsPerMM * 2;

const distanceToCenter = (gap + dotSize) / 2;

const transformOriginY = `${dotSize / 2}px`;
const transformOriginXLeftLine = `calc(100% + ${distanceToCenter}px)`;
const transformOriginXRightLine = `-${distanceToCenter}px`;

/**
 * Generates CSS properties for line styling with dynamic rotation and transform origin.
 * @param {string} transformOriginX - The X coordinate for the line's transform origin.
 * @param {number} rotation - The rotation angle in degrees for the line.
 * @returns {React.CSSProperties} The styling properties for a line.
 */
const lineStyling = (
  transformOriginX: string,
  rotation: number
): React.CSSProperties => {
  return {
    height: `${lineHeight}px`,
    width: `${lineWidth}px`,
    transform: `rotate(${rotation}deg)`,
    transformOrigin: `${transformOriginX} ${transformOriginY}`,
  };
};

export const lineColor = "bg-black";

/**
 * @param {number} rotation - The rotation angle in degrees for the line.
 * @returns {React.CSSProperties} The styling properties for the left line.
 */
export const leftLineStyling = (rotation: number): React.CSSProperties => {
  return lineStyling(transformOriginXLeftLine, rotation);
};

/**
 * @param {number} rotation - The rotation angle in degrees for the line.
 * @returns {React.CSSProperties} The styling properties for the right line.
 */
export const rightLineStyling = (rotation: number): React.CSSProperties => {
  return lineStyling(transformOriginXRightLine, rotation);
};

export const dotStyling: React.CSSProperties = {
  width: `${dotSize}px`,
  height: `${dotSize}px`,
  margin: `0 ${gap / 2}px`,
};
