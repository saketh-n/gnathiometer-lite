import { useContext } from "react";

import { MeasureContext } from "../../contexts/MeasureContext";

import { getChinMarkerCenter } from "../../helpers/constants/chinMarker";
import { growthPointX, zeroDegree } from "../../helpers/constants/growthGuide";
import { computeAngle } from "../../helpers/utils/vector-utils";
import {
  angleLabelColor,
  angleLabelFontSize,
  angleLineColor,
  getAngleLabelPosition,
  lineWidth,
  xAxisLineColor,
} from "../../helpers/constants/showAngle";

/**
 * Renders an SVG visualization of an angle measurement.
 * The `ShowAngle` component displays an SVG containing lines that represent
 * the angle between two points (the growth point and the chin marker) relative
 * to a zero-degree reference line. It also includes a text label showing the
 * computed angle value in degrees.
 * @returns {React.JSX.Element} An SVG with lines representing the measured
 * angle and a label displaying the angle's value.
 */
export const ShowAngle = (): React.JSX.Element => {
  const { chinMarkerPosition } = useContext(MeasureContext);

  const chinMarkerCenter = getChinMarkerCenter(chinMarkerPosition);

  // zero degree functions as a vecotr pointing along the positive x-axis
  // growthPointX through chinMarkerCenter helps us determine
  // the angle of the gnathion
  const angle = computeAngle(
    growthPointX,
    chinMarkerCenter,
    zeroDegree
  ).toFixed(2);

  const angleLabelPosition = getAngleLabelPosition(chinMarkerCenter);

  return (
    <svg className="absolute top-0 left-0 h-full w-full z-10">
      <line
        x1={chinMarkerCenter.x}
        y1={chinMarkerCenter.y}
        x2={growthPointX.x}
        y2={growthPointX.y}
        stroke={angleLineColor}
        strokeWidth={lineWidth}
      />
      <line
        x1={growthPointX.x}
        y1={growthPointX.y}
        x2={chinMarkerCenter.x}
        y2={zeroDegree.y}
        stroke={xAxisLineColor}
        strokeWidth={lineWidth}
      />
      <text
        x={angleLabelPosition.x}
        y={angleLabelPosition.y}
        fill={angleLabelColor}
        fontSize={angleLabelFontSize}
      >
        {`${angle}°`}
      </text>
    </svg>
  );
};
