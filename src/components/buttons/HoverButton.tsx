import React, { useState } from "react";
import { generateButtonStyle } from "../../helpers/styling/button";
import { generateStyle } from "../../helpers/styling/nav";

/**
 *
 * @param tailwindStyle Tailwind Classes to Style the Button
 * @param text What the button should display
 * @param bgImg Background image for the button
 * @param click What to do if the button is clicked, defaults to undefined
 * @returns Button that darkens when hovered over
 */
export const HoverButton = (props: {
  tailwindStyle: string;
  text: string;
  bgImg?: string;
  click?: () => void;
}): React.JSX.Element => {
  const { tailwindStyle, text, bgImg, click } = props;
  const [hover, setHover] = useState(false);

  return (
    <button
      style={bgImg ? generateStyle(bgImg, hover) : generateButtonStyle(hover)}
      onClick={click}
      className={tailwindStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );
};
