import { useContext } from "react";
import { Board } from "./Board";
import { MeasureContext } from "../../../contexts/MeasureContext";
import { ImageTransform } from "./ImageTransform";
import { isFinalInstruction } from "../../../helpers/utils/instruction-utils";
import { measureGrowthInstructions as instructions } from "../../../helpers/constants/instructions";
import { ResultMgmt } from "./ResultMgmt";

export const MgmtBoard = (): React.JSX.Element => {
  const { chinMarkerEnabled, instructionIndex: index } =
    useContext(MeasureContext);
  const finalInstruction = isFinalInstruction(index, instructions);

  const boardChild: React.JSX.Element = finalInstruction ? (
    <ResultMgmt />
  ) : (
    <ImageTransform />
  );
  return (
    <Board enabled={finalInstruction || !chinMarkerEnabled}>{boardChild}</Board>
  );
};
