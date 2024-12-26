import type { PokeAction } from "./pokeReduce";

export interface PokeState {
  inputValue: string;
  activeIndex: number;
  defaultName: string;
  keyPressing: string;
}

export interface PokeContextType {
  state: PokeState;
  dispatch: React.Dispatch<PokeAction>;
}
