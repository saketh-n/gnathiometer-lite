// The NavButton component allows you to navigate between the two main functionalities of
// Gnathiometer, the Measure Growth & Measure Improvement Screens

import { useState } from "react";

export const NavButton = (props: {
  img: string;
  text: string;
}): React.JSX.Element => {
  const { img, text } = props;
  const [hover, setHover] = useState(false);

  // No straightforward way to pass image urls as parameters in tailwind
  const style = {
    backgroundImage: `url(${img})`,
    filter: hover ? "brightness(50%)" : "brightness(100%)",
    transition: "filter 0.3s ease",
  };

  let tailwindStyling = `bg-cover bg-center h-[240px] w-[240px] text-lg rounded-3xl`;
  // Adding Responsive Design

  // Helper method for responsive design
  const responsiveStyling = (prefix: string): string => {
    // Map prefix to scaling coefficient
    const prefixToScale: Record<string, number> = {
      sm: 5,
      md: 6,
      lg: 7,
      xl: 8,
      "2xl": 9,
    };

    // Map prefix to text-scale
    const prefixToTextScale: Record<string, string> = {
      sm: "xl",
      md: "2xl",
      lg: "3xl",
      xl: "4xl",
      "2xl": "5xl",
    };

    const buttonSideLength = 60 * prefixToScale[prefix];

    let styling = ``;

    if (prefix in prefixToScale) {
      styling += ` ${prefix}:h-[${buttonSideLength}px]`;
      styling += ` ${prefix}:w-[${buttonSideLength}px]`;
    }

    if (prefix in prefixToTextScale) {
      styling += ` ${prefix}:text-${prefixToTextScale[prefix]}`;
    }

    return styling;
  };

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

  return (
    <button
      style={style}
      className={tailwindStyling}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );
};
