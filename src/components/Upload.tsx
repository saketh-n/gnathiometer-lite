import { Guidelines } from "./upload/Guidelines";
import { RefImage } from "./upload/RefImage";
import { SubmitImage } from "./upload/SubmitImage";

type UploadProps = {
  title: string;
  instructions: string[];
  img: string;
  submitText: string;
  route: string;
};

/**
 *
 * @param {string} title Guidelines Header
 * @param {string[]} instructions Instructions on what the appropriate image looks like
 * @param {string} img Path to reference Image
 * @param {string} submitText Text for the submit button
 * @param {string} route Where to navigate to after submit is pressed
 * @returns {React.JSX.Element} Page which provides guidelines for and handles the uploading of
 * patient images
 */
export const Upload = ({
  title,
  instructions,
  img,
  submitText,
  route,
}: UploadProps): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex justify-center mb-4">
        <Guidelines title={title} instructions={instructions} />
        <RefImage img={img} />
      </div>
      <div className="flex justify-center w-full">
        <SubmitImage
          submitText={submitText}
          route={route}
          testId="upload-image"
        />
      </div>
    </div>
  );
};
