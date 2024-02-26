import { useContext } from "react";

import { MeasureContext } from "../../contexts/MeasureContext";

import { growthPointX, zeroDegree } from "../../helpers/constants/growthGuide";
import {
  measurementLabelColor,
  angleLabelFontSize,
  angleLineColor,
  lineWidth,
  xAxisLineColor,
  positionLabelFontSize,
} from "../../helpers/constants/measurement";

import { getMeasurementValues } from "../../helpers/utils/measurement-utils";

/**
 * @returns {React.JSX.Element} Graphics of relevant measurements of the
 * gnathion (angle + position)
 */
export const ShowMeasurements = (): React.JSX.Element => {
  const { chinMarkerPosition } = useContext(MeasureContext);

  const {
    chinMarkerCenter,
    angleLabel,
    angleLineMagnitude,
    angleLabelPosition,
    gnathionLabelPosition,
    gnathionPositionLabel,
  } = getMeasurementValues(chinMarkerPosition);

  return (
    <svg className="absolute top-0 left-0 h-full w-full z-10">
      {/*Angle Line*/}
      <line
        x1={chinMarkerCenter.x}
        y1={chinMarkerCenter.y}
        x2={growthPointX.x}
        y2={growthPointX.y}
        stroke={angleLineColor}
        strokeWidth={lineWidth}
      />
      {/*Zero Degree Line (X-Axis)*/}
      <line
        x1={growthPointX.x}
        y1={growthPointX.y}
        x2={growthPointX.x + angleLineMagnitude}
        y2={zeroDegree.y}
        stroke={xAxisLineColor}
        strokeWidth={lineWidth}
      />
      <text
        x={angleLabelPosition.x}
        y={angleLabelPosition.y}
        fill={measurementLabelColor}
        fontSize={angleLabelFontSize}
      >
        {angleLabel}
      </text>
      <text
        x={gnathionLabelPosition.x}
        y={gnathionLabelPosition.y}
        fill={measurementLabelColor}
        fontSize={positionLabelFontSize}
      >
        {gnathionPositionLabel}
      </text>
    </svg>
  );
};
