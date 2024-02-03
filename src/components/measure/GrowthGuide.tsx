import guide from "../../images/app/growth-guide.png";

/**
 *
 * Renders the Gnathiometer's Growth Guide and ensures it appears on top
 * of other draggable elements in the application.
 * @returns {React.JSX.Element} Gnathiometer Growth Guide.
 */
export const GrowthGuide = (): React.JSX.Element => {
  // Make sure the Growth Guide always overlays any image
  const guideStyle: string = "z-10 relative pointer-events-none";

  return <img src={guide} alt="Growth Guide" className={guideStyle} />;
};
