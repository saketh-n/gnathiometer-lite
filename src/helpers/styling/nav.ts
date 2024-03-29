/**
 * @fileOverview Helpful methods & objects for the styling of the NavButton component
 */

import { generateButtonStyle } from "./button";

// Map prefix to scaling coefficient
export const prefixToScale: Record<string, number> = {
  sm: 5,
  md: 6,
  lg: 7,
  xl: 8,
  "2xl": 9,
};

// Map prefix to text-scale
export const prefixToTextScale: Record<string, string> = {
  sm: "xl",
  md: "2xl",
  lg: "3xl",
  xl: "4xl",
  "2xl": "5xl",
};

// How much to scale the buttons by per screen size
export const buttonCoeff = 60;

/**
 * Dynamically generates tailwind css for a given screen size
 * @param {string} prefix [sm, md ...] - what screen size to generate a responsive styling for
 * @returns {string} tailwind css as a string literal for the given prefix screen size
 */
export const responsiveStyling = (prefix: string): string => {
  let styling = ``;

  if (prefix in prefixToScale) {
    const buttonSideLength = buttonCoeff * prefixToScale[prefix];
    styling += ` ${prefix}:h-[${buttonSideLength}px]`;
    styling += ` ${prefix}:w-[${buttonSideLength}px]`;
  }

  if (prefix in prefixToTextScale) {
    styling += ` ${prefix}:text-${prefixToTextScale[prefix]}`;
  }

  return styling;
};

/**
 * Generates inline CSS Styling for the NavButton
 * @param {string} img path to the image you want to use for the NavButton background
 * @param {boolean} hover whether or not the button is being hovered over
 * @returns {React.CSSProperties} inline CSS Styling for the NavButton
 */
export const generateStyle = (
  img: string,
  hover: boolean
): React.CSSProperties => {
  return {
    backgroundImage: `url(${img})`,
    ...generateButtonStyle(hover),
  };
};

/**
 *
 * @returns {string} the tailwind css string literal for styling the NavButton
 */
export const generateTailwindStyling = (): string => {
  let tailwindStyling = `bg-cover bg-center h-[240px] w-[240px] text-lg rounded-3xl`;
  // Adding Responsive Design

  // Behavior on Small Screens (width > 640px)
  tailwindStyling += responsiveStyling("sm");

  // Behavior on Medium Screens (width > 768px)
  tailwindStyling += responsiveStyling("md");

  // Behavior on Large Screens (width > 1024 px)
  tailwindStyling += responsiveStyling("lg");

  // Behavior on XL Screens (width > 1280 px)
  tailwindStyling += responsiveStyling("xl");

  // Behavior on 2XL Screens (width > 1536 px)
  tailwindStyling += responsiveStyling("2xl");

  return tailwindStyling;
};
