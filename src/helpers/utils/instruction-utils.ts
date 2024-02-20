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
