import { useFormStatus } from "react-dom";

import { useDispatch, usePokeSelector } from "@src/hooks/core/index";

const KEY_STYLE =
  "w-10 h-10 text-black border-gray-300 border-b-slate-950 border-2 border-b-4 rounded-sm text-lg text-center flex items-center justify-center cursor-pointer hover:bg-slate-200 select-none transition";
const KEY_NAME = "Backspace";
export const BackSpace = () => {
  const { pending } = useFormStatus();
  const keyPressing = usePokeSelector("keyPressing");
  const dispatch = useDispatch();
  const handleMoveDown = () => {
    if (pending) return;
    dispatch({
      type: "BACKSPACE",
      payload: KEY_NAME,
    });
  };
  const handleMoveUp = () => {
    // reset key press
    dispatch({
      type: "INPUT_KEYBOARD",
      payload: "",
    });
  };
  return (
    <li
      className={`${KEY_STYLE} ${keyPressing === KEY_NAME && "border-b-[2px]"}`}
      onMouseDown={handleMoveDown}
      onMouseUp={handleMoveUp}
    >
      {"<--"}
    </li>
  );
};
