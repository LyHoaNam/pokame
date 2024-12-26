import { use } from "react";

import { PokeContext } from "@src/stores/PokeStore";
import type { PokeState } from "@src/stores/pokeType";

export const usePoke = () => {
  const context = use(PokeContext);
  if (!context) {
    throw new Error("usePoke must be used within a PokeProvider");
  }
  return context;
};

export const usePokeSelector = (selectState: keyof PokeState) => {
  const { state } = use(PokeContext);
  if (!selectState) {
    throw new Error("selectState must be valid");
  }
  return state[selectState];
};

export const useDispatch = () => {
  const { dispatch } = use(PokeContext);
  return dispatch;
};
