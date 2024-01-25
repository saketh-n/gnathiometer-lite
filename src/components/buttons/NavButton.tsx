import { generateTailwindStyling } from "../../helpers/styling/nav";
import { Link } from "react-router-dom";
import { HoverButton } from "./HoverButton";

type NavButtonProps = {
  img: string;
  text: string;
  route: string;
};

/**
 * @param {string} img The path to the image file we want as the button's background
 * @param {string} txt The text that the button displays
 * @param {string} route Where to navigate to on click
 * @returns {React.JSX.Element} NavButtons are used for navigating to one of
 *    the functions of Gnathiometer (Measure Forward Growth or Measure Improvement)
 */
export const NavButton = ({
  img,
  text,
  route,
}: NavButtonProps): React.JSX.Element => {
  return (
    <Link to={route}>
      <HoverButton
        bgImg={img}
        text={text}
        tailwindStyle={generateTailwindStyling()}
      />
    </Link>
  );
};
