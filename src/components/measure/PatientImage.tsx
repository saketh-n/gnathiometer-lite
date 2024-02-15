import Draggable from "react-draggable";
import { useRef, useMemo, useContext } from "react";
import { ImageNotFound } from "./ImageNotFound";
import { MeasureContext } from "../../contexts/MeasureContext";

type PatientImageProps = {
  img?: string;
};

/**
 *
 * @param {string} props.img The image to be displayed
 * @returns {React.JSX.Element} Draggable image element with specified transformations
 * If image value is invalid, returns no image found
 */
export const PatientImage = ({ img }: PatientImageProps): React.JSX.Element => {
  const { rotation, scalingFactor, chinMarkerEnabled } =
    useContext(MeasureContext);

  const normalizedRotation = useMemo(() => {
    return rotation % 360;
  }, [rotation]);

  const imageStyle: React.CSSProperties = useMemo(() => {
    return {
      transform: `rotate(${normalizedRotation}deg) scale(${scalingFactor})`,
    };
  }, [normalizedRotation, scalingFactor]);

  const dragEnabled = chinMarkerEnabled ? "pointer-events-none" : "cursor-move";

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
      <div ref={nodeRef} className={`flex-shrink-0 absolute ${dragEnabled}`}>
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
