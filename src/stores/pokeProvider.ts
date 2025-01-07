import { createContext } from "react";

import { LIMIT, OFFSET } from "@src/constants/BASE";

import type { PokeContextType } from "./pokeType";

export const initialPokeState: PokeContextType["state"] = {
  inputValue: "",
  activeIndex: 0,
  activeName: "spyduck",
  keyPressing: "",
  pokes: [],
  point: 0,
  option: {
    limit: LIMIT,
    offset: OFFSET,
  },
};

const initialState: PokeContextType = {
  state: initialPokeState,
  dispatch: () => null,
};

export const PokeContext = createContext<PokeContextType>(initialState);
export const PokeContextProvider = PokeContext;
