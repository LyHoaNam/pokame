import type { PokeAction } from "./pokeReduce";

export interface IOption {
  limit: number;
  offset: number;
}
export interface PokeState {
  inputValue: string;
  activeIndex: number;
  point: number;
  activeName: string;
  keyPressing: string;
  pokes: PokeCard[];
  option: IOption;
}

export interface PokeContextType {
  state: PokeState;
  dispatch: React.Dispatch<PokeAction>;
}

export interface PokeCard {
  name: string;
}
