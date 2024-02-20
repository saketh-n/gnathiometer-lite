import { Upload } from "../components/Upload";
import refImg from "../images/ref/m-improv-ref.jpg";
import { uploadGrowthInstructions as instructions } from "../helpers/constants/instructions";

/**
 *
 * @returns {React.JSX.Element} Page that handles upload of patient images for
 * measuring forward growth
 */
export const UploadGrowth = (): React.JSX.Element => {
  const title = "Image Guidelines";
  const submitText = "Upload Image ⬆️";
  const route = "/measure-growth";

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
