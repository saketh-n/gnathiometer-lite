import { useContext } from "react";
import guide from "../../images/app/growth-guide.png";
import guideNo5CM from "../../images/app/growth-guide-no-5cm-marker.png";
import { MeasureContext } from "../../contexts/MeasureContext";
import { ChinMarker } from "./ChinMarker";

/**
 *
 * Renders the Gnathiometer's Growth Guide and ensures it appears on top
 * of other draggable elements in the application.
 * @returns {React.JSX.Element} Gnathiometer Growth Guide.
 */
export const GrowthGuide = (): React.JSX.Element => {
  const { chinMarkerEnabled, instructionIndex: index } =
    useContext(MeasureContext);

  // The first instruction is to scale the image, after that we don't want
  // growth guide to have a 5CM Marker
  const guideImg = index >= 1 ? guideNo5CM : guide;

  return (
    <div className="relative">
      <img src={guideImg} alt="Growth Guide" data-testid="growth-guide" />
      {chinMarkerEnabled && <ChinMarker />}
    </div>
  );
};
