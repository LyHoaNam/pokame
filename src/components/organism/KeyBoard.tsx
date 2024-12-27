import { useFormStatus } from "react-dom";

import RowKeyBoards from "@src/components/molecule/RowKeyBoards";
import { useHandleRealKeyboard } from "@src/hooks/useKeyboard";

const KeyBoard = () => {
  const { pending } = useFormStatus();

  useHandleRealKeyboard({ isDisable: pending });
  return (
    <div className="pb-7 pt-4 flex flex-col items-center">
      <RowKeyBoards.top />
      <RowKeyBoards.home />
      <RowKeyBoards.bottom />
    </div>
  );
};
export default KeyBoard;
