// Handy values for use in GrowthGuide

import { Position } from "../../types/position";

// rough approximation via visual examination of the growth guide (5 CM Marker)
export const pixelsPerMM = 160 / 50;

export const growthGuideHeight = 768;

export const growthGuideWidth = 575;

export const growthPointX: Position = { x: 279, y: 452 };

// The vector from which we measure the growth angle
export const zeroDegree: Position = { x: growthGuideWidth, y: growthPointX.y };
