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
  "Press Next to Return Home",
];

/**
 * Finds the index of the first instruction containing phrase
 *
 * @param {string[]} instructions - Instructions to look through.
 * @returns {number} The index of the instruction containing the phrase, or -1 if not found.
 */
const getInstructionIndex = (
  instructions: string[],
  phrase: string
): number => {
  return instructions.findIndex((instruction) => instruction.includes(phrase));
};

/**
 * Finds the index of the first instruction referring to chin marker
 * Handy for determining when to show the ChinMarker component
 *
 * @param {string[]} instructions - Instructions to look through.
 * @returns {number} The index of the instruction containing "Chin Marker", or -1 if not found.
 */
export const getChinMarkerIndex = (instructions: string[]): number => {
  return getInstructionIndex(instructions, "Chin Marker");
};

/**
 * @param {string[]} instructions - Instructions to look through.
 * @returns {number} Index of instruction that contains `compute Angle`
 */
export const getComputeAngleIndex = (instructions: string[]): number => {
  return getInstructionIndex(instructions, "compute Angle");
};

/**
 * Finds the index of the first instruction referring to print
 * When pressing next on this instruction, triggers print
 *
 * @param {string[]} instructions - Instructions to look through.
 * @returns {number} The index of the instruction containing "Print", or -1 if not found.
 */
export const getPrintIndex = (instructions: string[]): number => {
  return getInstructionIndex(instructions, "Print");
};

/**
 * Finds the index of the first instruction referring to home
 * When pressing next on this instruction, triggers return home
 *
 * @param {string[]} instructions - Instructions to look through.
 * @returns {number} The index of the instruction containing "Home", or -1 if not found.
 */
export const getHomeIndex = (instructions: string[]): number => {
  return getInstructionIndex(instructions, "Home");
};
