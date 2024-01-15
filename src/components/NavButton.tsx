import { useState } from "react";
import { generateStyle, generateTailwindStyling } from "../helpers/nav-styling";

/** NavButtons are used for navigating to one of the functions of Gnathiometer
 *    (Measure Forward Growth or Measure Improvement)
 */
export const NavButton = (props: {
  img: string;
  text: string;
}): React.JSX.Element => {
  /**
   * @param img The path to the image file we want as the button's background
   * @param txt The text that the button displays
   */
  const { img, text } = props;
  const [hover, setHover] = useState(false);

  return (
    <button
      style={generateStyle(img, hover)}
      className={generateTailwindStyling()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </button>
  );
};
