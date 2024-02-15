import { useContext } from "react";
import guide from "../../images/app/growth-guide.png";
import { MeasureContext } from "../../contexts/MeasureContext";
import { ChinMarker } from "./ChinMarker";

/**
 *
 * Renders the Gnathiometer's Growth Guide and ensures it appears on top
 * of other draggable elements in the application.
 * @returns {React.JSX.Element} Gnathiometer Growth Guide.
 */
export const GrowthGuide = (): React.JSX.Element => {
  const { chinMarkerEnabled } = useContext(MeasureContext);

  return (
    <div className="relative">
      <img src={guide} alt="Growth Guide" data-testid="growth-guide" />
      {chinMarkerEnabled && <ChinMarker />}
    </div>
  );
};
