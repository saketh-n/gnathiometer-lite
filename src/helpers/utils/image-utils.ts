/**
 * @fileoverview Utility functions for image loading and handling.
 * Provides functions to handle the loading of images and perform actions
 * on successful or failed loading.
 */

import { NavigateFunction } from "react-router";

/**
 * Navigates to a specified route with the image source in the state.
 * This function is typically used as a callback when an image has been
 * successfully loaded.
 *
 * @param {string} src - The source URL of the image.
 * @param {NavigateFunction} navigate - The navigation function to change routes.
 * @param {string} route - The route to navigate to.
 */
export const handleImageLoad = (
  src: string,
  navigate: NavigateFunction,
  route: string
) => {
  navigate(route, {
    state: {
      image: src,
    },
  });
};

/**
 * Creates an Image object and sets up onload and onerror callbacks.
 * It attempts to load an image from the given source and executes
 * the appropriate callback based on the result of the loading process.
 *
 * @param {string} src - The source URL of the image to load.
 * @param {(src: string) => void} onLoad - Callback function to execute upon successful loading of the image.
 * @param {() => void} onError - Callback function to execute if the image fails to load.
 */
export const loadImage = (
  src: string,
  onLoad: (src: string) => void,
  onError: () => void
) => {
  const img = new Image();
  img.src = src;
  img.onload = () => onLoad(img.src);
  img.onerror = () => onError();
};
