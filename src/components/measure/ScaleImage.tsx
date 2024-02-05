import { useCallback } from "react";

type ScaleImageProps = {
  scalingFactor: number;
  setScalingFactor: (value: number) => void;
};

/**
 * @param {(value: number) => void} Callback to update the scalingFactor
 * @param {number} scalingFactor The amount by which to scale the image
 * @returns {React.JSX.Element} Slider and Text Input to alter the image
 * scaling factor
 */
export const ScaleImage = ({
  scalingFactor,
  setScalingFactor,
}: ScaleImageProps): React.JSX.Element => {
  // memoize the function
  const handleScalingChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newScaling = parseFloat(event.target.value);
      // Scaling Factor is rendered as percent, but when passing it as a
      // style it is not in percent
      setScalingFactor(newScaling / 100);
    },
    [setScalingFactor]
  );

  const scalingPercent = scalingFactor * 100;

  return (
    <div className="flex flex-col gap-2">
      <div>
        <label htmlFor="scalingInput">Scaling Factor (%): </label>
        <input
          type="number"
          id="scalingInput"
          value={scalingPercent}
          onChange={handleScalingChange}
          min="1"
          max="300"
          step="0.1"
        />
      </div>
      <input
        type="range"
        id="scalingSlider"
        value={scalingPercent}
        onChange={handleScalingChange}
        min="1"
        max="300"
        step="0.1"
      />
    </div>
  );
};
