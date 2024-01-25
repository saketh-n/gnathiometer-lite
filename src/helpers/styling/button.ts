/**
 * @fileOverview Helpful methods & objects for the styling of buttons
 */

/**
 * @param {boolean} hover whether or not the button is being hovered over
 * @returns {React.CSSProperties}  Generates inline CSS Styling for a Button's
 *  hover effect
 */
export const generateButtonStyle = (hover: boolean): React.CSSProperties => {
  return {
    filter: hover ? "brightness(50%)" : "brightness(100%)",
    transition: "filter 0.3s ease",
  };
};
