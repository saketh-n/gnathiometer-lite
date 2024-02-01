import CircularSlider from "@fseehawer/react-circular-slider";

type RotateImageProps = {
  setRotation: (value: number) => void;
};

/**
 *
 * @param {(value: number) => void} [setRotation] callBack that updates
 * PatientImage's rotation based on the slider value
 * @returns {React.JSX.Element} Circular Slider that toggles the rotation
 * of Patient Image
 */
export const RotateImage = ({
  setRotation,
}: RotateImageProps): React.JSX.Element => {
  return (
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
  );
};
