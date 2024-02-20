export const growthInstructions = [
  "Drag the end of the 5CM Marker to Point N on the Growth Guide",
  "Rotate the image so that the marker is parallel and on the line from point F through N",
  "Scale up the image so that the 5CM Marker starts at Point F and ends at point N",
  "Return the Patient Image to normal rotation, but maintain the scale",
  "Superimpose the Patient Image on Point N",
  "Rotate the Patient Image so that Point F touches the soft tissue of the forehead above",
  "Place the Chin Marker on the Gnathion (forwardmost and downwardmost point on the Chin)",
  "Ensure everything looks good, otherwise go back to fix it, click Next to compute Angle",
  "Press Next to Print Results",
];

/**
 * Finds the index of the first instruction referring to chin marker
 * Handy for determining when to show the ChinMarker component
 *
 * @param {string[]} instructions - Instructions to look through.
 * @returns {number} The index of the instruction containing "Chin Marker", or -1 if not found.
 */
export const getChinMarkerIndex = (instructions: string[]): number => {
  return instructions.findIndex((instruction) =>
    instruction.includes("Chin Marker")
  );
};

/**
 * @returns {number} Index of instruction after get chin marker in growth
 * instructions. This is when to show the computed angle of forward growth
 */
export const showGrowthIndex = (): number => {
  return getChinMarkerIndex(growthInstructions) + 2;
};
