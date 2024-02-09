import React, { useEffect, useRef, useState } from "react";
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
  const markerStyle =
    "cursor-move pointer-events-auto absolute flex items-center justify-center";
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const nodeRef = useRef(null);

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
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setPosition({ x: centerX, y: centerY });
  }, []);

  return (
    <div className={containerStyle} data-testid="chin-marker">
      <Draggable position={position} onStop={handleStop} nodeRef={nodeRef}>
        <div ref={nodeRef} className={markerStyle}>
          <div className={lineColor} style={leftLineStyling(rotation)}></div>

          <div className="bg-red-500 rounded-full" style={dotStyling}></div>

          <div className={lineColor} style={rightLineStyling(rotation)}></div>
        </div>
      </Draggable>
    </div>
  );
};
