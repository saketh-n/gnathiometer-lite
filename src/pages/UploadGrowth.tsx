import { Upload } from "../components/Upload";
import refImg from "../images/ref/m-improv-ref.jpg";

/**
 *
 * @returns {React.JSX.Element} Page that handles upload of patient images for
 * measuring forward growth
 */
export const UploadGrowth = (): React.JSX.Element => {
  const title = "Image Guidelines";
  const instructions = [
    "Photograph the patient’s face in a true lateral position.",
    "Use an ‘Alice’ band to make sure that neither the forehead nor the tragus of the ear is obscured with hair.",
    "Make sure a scale of centimetres or a 5cm marker is included. This must be placed in the midline with the sagittal plane to ensure accuracy.",
  ];
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
