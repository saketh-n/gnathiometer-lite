import { Upload } from "../components/Upload";
import refImg from "../images/ref/m-improv-ref.jpg";
import { uploadGrowthInstructions as instructions } from "../helpers/constants/instructions";

type UploadGrowthProps = {
  route?: string;
};

/**
 * @param {string} route Where to navigate once the Upload Image button has
 * been pressed
 * @returns {React.JSX.Element} Page that handles upload of patient images for
 * measuring forward growth
 */
export const UploadGrowth = ({
  route = "/measure-growth",
}: UploadGrowthProps): React.JSX.Element => {
  const title = "Image Guidelines";
  const submitText = "Upload Image ⬆️";

  return (
    <Upload
      title={title}
      instructions={instructions}
      img={refImg}
      submitText={submitText}
      route={route}
    />
  );
};
