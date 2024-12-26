import { createContext } from "react";

import type { PokeContextType } from "./pokeType";

export const initialPokeState: PokeContextType["state"] = {
  inputValue: "",
  activeIndex: 0,
  defaultName: "spyduck",
  keyPressing: "",
};

const initialState: PokeContextType = {
  state: initialPokeState,
  dispatch: () => null,
};

export const PokeContext = createContext<PokeContextType>(initialState);
export const PokeContextProvider = PokeContext.Provider;
