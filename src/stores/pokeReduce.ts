import type { PokeState } from "./pokeType";

export type PokeAction =
  | { type: "INPUT_KEYBOARD"; payload: string }
  | { type: "BACKSPACE"; payload: string };

export const pokeReducer = (
  state: PokeState,
  action: PokeAction
): PokeState => {
  switch (action.type) {
    case "INPUT_KEYBOARD":
      if (state.defaultName.length === state.inputValue.length) {
        return state;
      }
      const fullValue = state.inputValue + action.payload;
      return {
        ...state,
        inputValue: fullValue,
        keyPressing: action.payload,
      };
    case "BACKSPACE":
      const removeLastCharacter = state.inputValue.slice(0, -1);
      return {
        ...state,
        inputValue: removeLastCharacter,
        keyPressing: action.payload,
      };
    default:
      return state;
  }
};
