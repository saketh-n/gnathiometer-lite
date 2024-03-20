import { RotateImage } from "../RotateImage";
import { ScaleImage } from "../ScaleImage";

export const ImageTransform = (): React.JSX.Element => {
  return (
    <>
      <RotateImage />
      <ScaleImage />
    </>
  );
};
