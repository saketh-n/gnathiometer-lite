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

  return (
    <button
      style={style}
      className={`bg-cover bg-center h-[360px] w-[360px] text-2xl rounded-3xl`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );
};
