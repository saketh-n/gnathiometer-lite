import React, { useState } from "react";
import { generateButtonStyle } from "../../helpers/styling/button";
import { generateStyle } from "../../helpers/styling/nav";

type HoverButtonProps = {
  tailwindStyle: string;
  text: string;
  bgImg?: string;
  click?: () => void;
  testId?: string;
};

/**
 *
 * @param {string} tailwindStyle Tailwind Classes to Style the Button
 * @param {string} text What the button should display
 * @param {string?} bgImg Background image for the button
 * @param {() => void} click What to do if the button is clicked, defaults
 * to undefined
 * @param {string?} testId test id name for unit test selectors
 * @returns {React.JSX.Element} Button that darkens when hovered over
 */
export const HoverButton = ({
  tailwindStyle,
  text,
  bgImg,
  click,
  testId,
}: HoverButtonProps): React.JSX.Element => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={bgImg ? generateStyle(bgImg, hover) : generateButtonStyle(hover)}
      onClick={click}
      className={tailwindStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-testid={testId ?? "hover-button"}
    >
      {text}
    </button>
  );
};
