import Draggable from "react-draggable";
import { useRef, useMemo, useContext, useCallback } from "react";

import { GrowthGuide } from "../measure/GrowthGuide";
import { ImageNotFound } from "./ImageNotFound";
import { MeasureContext } from "../../contexts/MeasureContext";
import { MgmtBoard } from "./boards/MgmtBoard";
import { isFinalInstruction } from "../../helpers/utils/instruction-utils";
import { measureGrowthInstructions as instructions } from "../../helpers/constants/instructions";

export type PatientImageProps = {
  img?: string;
};

/**
 *
 * @param {string} props.img The image to be displayed
 * @returns {React.JSX.Element} Draggable image element with specified transformations
 * If image value is invalid, returns no image found
 */
export const PatientImage = ({ img }: PatientImageProps): React.JSX.Element => {
  const {
    rotation,
    scalingFactor,
    chinMarkerEnabled,
    instructionIndex: index,
  } = useContext(MeasureContext);

  const imageStyle: React.CSSProperties = useMemo(() => {
    return {
      transform: `rotate(${rotation}deg) scale(${scalingFactor})`,
    };
  }, [rotation, scalingFactor]);

  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = useCallback(() => {
    if (imgRef.current) {
      const scaledWidth = imgRef.current.naturalWidth * scalingFactor;
      const scaledHeight = imgRef.current.naturalHeight * scalingFactor;

      imgRef.current.style.minWidth = `${scaledWidth}px`;
      imgRef.current.style.minHeight = `${scaledHeight}px`;
    }
  }, [scalingFactor]);

  const dragEnabled = chinMarkerEnabled ? "pointer-events-none" : "cursor-move";

  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    // Prevent the default drag behavior - stops jerky motion of Draggable
    event.preventDefault();
  };

  const nodeRef = useRef(null);

  const finalInstruction = isFinalInstruction(index, instructions);

  if (!img) {
    return <ImageNotFound route="/measure-growth" />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <div className="z-10 flex-shrink-0 relative pointer-events-none user-select-none">
          <GrowthGuide />
        </div>
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef} className={`absolute ${dragEnabled}`}>
            <img
              ref={imgRef}
              src={img}
              alt="Patient"
              style={imageStyle}
              onDragStart={handleDragStart}
              onLoad={handleImageLoad}
              data-testid="patient-image"
            />
          </div>
        </Draggable>
      </div>
      <div className="z-10 relative">
        {/*Image is locked so no need for the Board*/}
        {(!chinMarkerEnabled || finalInstruction) && <MgmtBoard />}
      </div>
    </div>
  );
};
