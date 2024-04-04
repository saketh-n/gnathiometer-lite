import { useNavigate } from "react-router-dom";
import { HoverButton } from "../../buttons/HoverButton";
import { useContext, useRef } from "react";
import { MeasureContext } from "../../../contexts/MeasureContext";

export const ResultMgmt = (): React.JSX.Element => {
  const { setAfterImgSrc, after } = useContext(MeasureContext);
  const buttonStyle =
    "w-1/3 aspect-square py-2 px-4 bg-gray-200 border-2 border-gray-400 text-black font-semibold rounded-xl hover:bg-gray-300";
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const newImageClick = () => navigate("/");
  const downloadResultsClick = () => window.print();
  const uploadAfterClick = () => inputRef.current?.click();

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
        setAfterImgSrc?.(reader.result as string);
      } else {
        console.error("No result from FileReader");
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <HoverButton
        tailwindStyle={buttonStyle}
        text="Download Results"
        click={downloadResultsClick}
      />
      <HoverButton
        tailwindStyle={buttonStyle}
        text="Start Over"
        click={newImageClick}
      />
      {!after && (
        <HoverButton
          tailwindStyle={buttonStyle}
          text="Upload After Image"
          click={uploadAfterClick}
        />
      )}
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
