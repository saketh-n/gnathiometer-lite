import Draggable from "react-draggable";
import { useRef, useMemo } from "react";
import { ImageNotFound } from "./ImageNotFound";

type PatientImageProps = {
  img?: string;
  rotation?: number;
  scalingFactor?: number;
};

/**
 *
 * @param {string} props.img The image to be displayed
 * @param {number} [props.rotation=0] Rotation angle of image in degrees
 * @param {number} [props.scalingFactor=1] Scaling Factor for image, defaults to 1
 * @returns {React.JSX.Element} Draggable image element with specified transformations
 * If image value is invalid, returns no image found
 */
export const PatientImage = ({
  img,
  rotation = 0,
  scalingFactor = 1,
}: PatientImageProps): React.JSX.Element => {
  const normalizedRotation = useMemo(() => {
    return rotation % 360;
  }, [rotation]);

  const imageStyle: React.CSSProperties = useMemo(() => {
    return {
      transform: `rotate(${normalizedRotation}deg) scale(${scalingFactor})`,
    };
  }, [normalizedRotation, scalingFactor]);

  const nodeRef = useRef(null);

  if (!img) {
    return <ImageNotFound route="/measure-growth" />;
  }

  // TODO: Draggable motion is jerky. Fix
  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        <img src={img} alt="Patient" style={imageStyle} />
      </div>
    </Draggable>
  );
};
