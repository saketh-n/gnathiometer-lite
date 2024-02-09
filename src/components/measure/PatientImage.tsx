import Draggable from "react-draggable";
import { useRef, useMemo } from "react";
import { ImageNotFound } from "./ImageNotFound";

type PatientImageProps = {
  img?: string;
  rotation?: number;
  scalingFactor?: number;
  chinMarkerEnabled?: boolean;
};

/**
 *
 * @param {string} props.img The image to be displayed
 * @param {number} [props.rotation=0] Rotation angle of image in degrees
 * @param {number} [props.scalingFactor=1] Scaling Factor for image, defaults to 1
 * @param {boolean} [props.chinMarkerEnabled=false] Whether the chinMarker is
 * available and if it is you want to make the patient image unchangeable.
 * @returns {React.JSX.Element} Draggable image element with specified transformations
 * If image value is invalid, returns no image found
 */
export const PatientImage = ({
  img,
  rotation = 0,
  scalingFactor = 1,
  chinMarkerEnabled = false,
}: PatientImageProps): React.JSX.Element => {
  const normalizedRotation = useMemo(() => {
    return rotation % 360;
  }, [rotation]);

  const imageStyle: React.CSSProperties = useMemo(() => {
    return {
      transform: `rotate(${normalizedRotation}deg) scale(${scalingFactor})`,
    };
  }, [normalizedRotation, scalingFactor]);

  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    // Prevent the default drag behavior - stops jerky motion of Draggable
    event.preventDefault();
  };

  const nodeRef = useRef(null);

  if (!img) {
    return <ImageNotFound route="/measure-growth" />;
  }

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className={`flex-shrink-0 ${
          chinMarkerEnabled ? "pointer-events-none" : "cursor-move"
        }`}
      >
        <img
          src={img}
          alt="Patient"
          style={imageStyle}
          onDragStart={handleDragStart}
          data-testid="patient-image"
        />
      </div>
    </Draggable>
  );
};
