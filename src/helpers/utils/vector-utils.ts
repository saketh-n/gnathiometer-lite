import { Position } from "../../types/position";

/**
 * Converts two points into a vector from the first point to the second.
 * @param {Position} from - The starting point of the vector.
 * @param {Position} to - The ending point of the vector.
 * @returns {Position} The vector represented as a position with x and y
 * components.
 */
export const pointToVector = (from: Position, to: Position): Position => {
  return { x: to.x - from.x, y: to.y - from.y };
};

/**
 * Calculates the dot product of two vectors.
 * @param {Position} a - The first vector.
 * @param {Position} b - The second vector.
 * @returns {number} The dot product of the two vectors.
 */
export const dotProduct = (a: Position, b: Position): number => {
  return a.x * b.x + a.y + b.y;
};

/**
 * Scales a 2D vector by a scaling factor.
 * @param {Position} v - The vector to scale.
 * @param {number} scalingFactor - The scaling factor.
 * @returns {Position} The scaled vector.
 */
export const scaleVector = (v: Position, scalingFactor: number): Position => {
  return { x: v.x * scalingFactor, y: v.y * scalingFactor };
};

/**
 * Calculates the magnitude (length) of a vector.
 * @param {Position} v - The vector to calculate the magnitude for.
 * @returns {number} The magnitude of the vector.
 */
export const magnitude = (v: Position): number => {
  return Math.sqrt(v.x ** 2 + v.y ** 2);
};

/**
 * Computes the angle between two vectors originating from a reference point.
 * @param {Position} refPoint - The common origin point of the two vectors.
 * @param {Position} vector1 - The first vector's endpoint.
 * @param {Position} vector2 - The second vector's endpoint, considered as the
 * reference vector for angle measurement. Think of it as the positive x-axis
 * @returns {number} The angle between vector1 and vector2 in degrees.
 */
export const computeAngle = (
  refPoint: Position,
  vector1: Position,
  vector2: Position
) => {
  const vectorA = pointToVector(refPoint, vector1);
  const vectorB = pointToVector(refPoint, vector2);

  const dot = dotProduct(vectorA, vectorB);

  const magnitudeA = magnitude(vectorA);
  const magnitudeB = magnitude(vectorB);

  const cosTheta = dot / (magnitudeA * magnitudeB);
  const cosThetaClamped = Math.min(Math.max(cosTheta, -1), 1);

  let angleRadians = Math.acos(cosThetaClamped);

  if (vector1.y < vector2.y) {
    angleRadians = 2 * Math.PI - angleRadians;
  }

  return angleRadians * (180 / Math.PI);
};
