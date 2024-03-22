import { useNavigate } from "react-router-dom";
import { HoverButton } from "../../buttons/HoverButton";

export const ResultMgmt = (): React.JSX.Element => {
  const buttonStyle =
    "w-1/3 aspect-square py-2 px-4 bg-gray-200 border-2 border-gray-400 text-black font-semibold rounded-xl hover:bg-gray-300";
  const navigate = useNavigate();

  const newImageClick = () => navigate("/");
  const downloadResultsClick = () => window.print();
  // TODO: Add uploadAfterClick

  return (
    <>
      <HoverButton
        tailwindStyle={buttonStyle}
        text="Download Results"
        click={downloadResultsClick}
      />
      <HoverButton
        tailwindStyle={buttonStyle}
        text="Upload New Image"
        click={newImageClick}
      />
      <HoverButton tailwindStyle={buttonStyle} text="Upload After Image" />
    </>
  );
};
