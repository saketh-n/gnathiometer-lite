import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HoverButton } from "../buttons/HoverButton";
import { loadImage, handleImageLoad } from "../../helpers/utils/image-utils";

type SubmitImageProps = {
  submitText: string;
  route: string;
  testId?: string;
};

/**
 *
 * @param {string} submitText What the upload button should display
 * @param {string} route The path to navigate to after image upload
 * @param {string?} testId test id name for unit test selectors
 * @returns {React.JSX.Element} Select an image, and upload it to the page
 * reached by route
 */
export const SubmitImage = ({
  submitText,
  route,
  testId,
}: SubmitImageProps): React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onerror = (error: ProgressEvent<FileReader>) => {
      console.error("Error reading file:", error);
      reader.abort();
    };

    reader.onloadend = () => {
      if (reader.result) {
        loadImage(
          reader.result as string,
          (src: string) => handleImageLoad(src, navigate, route),
          () => console.log("Error loading image")
        );
      } else {
        console.error("No result from FileReader");
      }
    };

    reader.readAsDataURL(file);
  };

  const tailwindStyle =
    "bg-gray-200 border-gray-300 lg:px-32 py-12 text-2xl rounded-xl border-4 focus:border-gray-200 w-half-screen";

  return (
    <>
      <HoverButton
        tailwindStyle={tailwindStyle}
        text={submitText}
        click={() => inputRef.current?.click()}
        testId={testId}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={inputRef}
        style={{ display: "none" }}
      />
    </>
  );
};
