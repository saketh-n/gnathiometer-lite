import CircularSlider from "@fseehawer/react-circular-slider";

type RotateImageProps = {
  setRotation: (value: number) => void;
};

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
      valueFontSize="4rem"
      trackColor="#eeeeee"
      labelColor="#FFFFFF"
      knobColor="#1C1C1E"
      progressColorFrom="#B1D0E6"
      progressColorTo="#9CA3AF"
      onChange={(value: any) => {
        setRotation(value);
      }}
    />
  );
};
