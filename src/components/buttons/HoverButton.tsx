import React, { useState } from "react";
import { generateButtonStyle } from "../../helpers/styling/button";
import { generateStyle } from "../../helpers/styling/nav";

type HoverButtonProps = {
  tailwindStyle: string;
  text: string;
  bgImg?: string;
  click?: () => void;
};

/**
 *
 * @param {string} tailwindStyle Tailwind Classes to Style the Button
 * @param {string} text What the button should display
 * @param {string?} bgImg Background image for the button
 * @param {() => void} click What to do if the button is clicked, defaults
 * to undefined
 * @returns {React.JSX.Element} Button that darkens when hovered over
 */
export const HoverButton = ({
  tailwindStyle,
  text,
  bgImg,
  click,
}: HoverButtonProps): React.JSX.Element => {
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
