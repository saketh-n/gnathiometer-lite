import { SubmitImage } from "../upload/SubmitImage";

type ImageNotFoundProps = {
  route: string;
};

// TODO: Internationalizations Support
const notFound = "Patient image not found";
const submitText = "Re-Upload Image ⬆️";

/**
 *
 * @param {string} route The route the re-upload button navigates to
 * @returns {React.JSX.Element} Helpful error message if an image not found,
 * provides ability to re upload image
 */
export const ImageNotFound = ({
  route,
}: ImageNotFoundProps): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-2xl text-center my-8">{notFound}</p>
      <SubmitImage submitText={submitText} route={route} />
    </div>
  );
};
