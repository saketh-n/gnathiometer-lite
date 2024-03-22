import React, { useContext, useEffect, useRef } from "react";

import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from "react-draggable";

import {
  leftLineStyling,
  rightLineStyling,
  dotStyling,
  lineColor,
} from "../../helpers/constants/chinMarker";
import { measureGrowthInstructions as instructions } from "../../helpers/constants/instructions";
import { isFinalInstruction } from "../../helpers/utils/instruction-utils";

import { MeasureContext } from "../../contexts/MeasureContext";

import { ShowMeasurements } from "./ShowMeasurements";

type ChinMarkerProps = {
  rotation?: number;
};

/**
 *
 * @param {number} rotation What degree of rotation should the marker be at
 * @returns {React.JSX.Element} displays a draggable marker with configurable rotation.
 */
export const ChinMarker = ({
  rotation = 315,
}: ChinMarkerProps): React.JSX.Element => {
  const containerStyle =
    "absolute top-0 left-0 w-full h-full z-1000 pointer-events-none";

  const {
    chinMarkerPosition: position,
    setChinMarkerPosition: setPosition,
    instructionIndex: index,
  } = useContext(MeasureContext);

  const nodeRef = useRef<HTMLDivElement>(null);
  // Only show the displayed angle once you are past the compute angle
  // instruction
  const showGrowthIndex = isFinalInstruction(index, instructions);

  // Once we show displayed angle, chinMarker should be fixed
  const markerStyle = `${
    !showGrowthIndex ? "cursor-move pointer-events-auto" : ""
  } absolute flex items-center justify-center`;

  /**
   * Handles the stop event of the draggable action, updating the marker's position.
   *
   * @param {DraggableEvent} e - The event triggered on drag stop.
   * @param {DraggableData} data - Data about the drag event, including new position.
   */
  const handleStop: DraggableEventHandler = (
    e: DraggableEvent,
    data: DraggableData
  ): void => {
    setPosition({ x: data.x, y: data.y });
  };

  // Set initial position of marker
  useEffect(() => {
    if (nodeRef.current && nodeRef.current.parentElement) {
      const parent = nodeRef.current.parentElement;
      const { width, height } = parent.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;
      // Adjust the position to center within the parent, taking into account the
      // marker's size if necessary
      setPosition({
        x: centerX - nodeRef.current.offsetWidth / 2,
        y: centerY - nodeRef.current.offsetHeight / 2,
      });
    }
  }, [setPosition]);

  return (
    <div className={containerStyle} data-testid="chin-marker">
      <Draggable
        position={position}
        onStop={handleStop}
        nodeRef={nodeRef}
        bounds="parent"
      >
        <div ref={nodeRef} className={markerStyle}>
          <div className={lineColor} style={leftLineStyling(rotation)}></div>

          <div className="bg-red-500 rounded-full" style={dotStyling}></div>

          <div className={lineColor} style={rightLineStyling(rotation)}></div>
        </div>
      </Draggable>
      {showGrowthIndex && <ShowMeasurements />}
    </div>
  );
};
