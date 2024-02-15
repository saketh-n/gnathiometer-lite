import { useContext } from "react";
import { RotateImage } from "./RotateImage";
import { ScaleImage } from "./ScaleImage";
import { MeasureContext } from "../../contexts/MeasureContext";

export const ImageTransform = (): React.JSX.Element => {
  const { chinMarkerEnabled } = useContext(MeasureContext);

  const pointerEvents = chinMarkerEnabled
    ? "pointer-events-none"
    : "pointer-events-auto";

  const tailwindStyle = `flex items-center justify-around ${pointerEvents}  border-gray-300 bg-gray-200 border-4 rounded-md p-4 mt-4`;

  return (
    <div className={tailwindStyle}>
      <RotateImage />
      <ScaleImage />
    </div>
  );
};
