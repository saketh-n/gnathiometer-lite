import CircularSlider from "@fseehawer/react-circular-slider";
import { useContext } from "react";
import { MeasureContext } from "../../contexts/MeasureContext";

/**
 *
 * @returns {React.JSX.Element} Circular Slider that toggles the rotation
 * of Patient Image
 */
export const RotateImage = (): React.JSX.Element => {
  const { setRotation } = useContext(MeasureContext);

  return (
    <div data-testid="image-rotate">
      <CircularSlider
        width={165}
        min={0}
        max={360}
        knobPosition={"right"}
        label="Angle"
        appendToValue="°"
        valueFontSize="3rem"
        trackColor="#eeeeee"
        labelColor="#000000"
        knobColor="#1C1C1E"
        progressColorFrom="#B1D0E6"
        progressColorTo="#9CA3AF"
        onChange={(value: any) => {
          setRotation(value);
        }}
      />
    </div>
  );
};
