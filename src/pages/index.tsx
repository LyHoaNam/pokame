import { type FC, useReducer } from "react";

import { Header } from "@src/components/atom/Header";
import { SubHeader } from "@src/components/atom/SubHeader";
import IndexCounter from "@src/components/molecule/IndexCounter";
import { OptionLevel } from "@src/components/molecule/OptionLevel";
import ScoreBoard from "@src/components/molecule/ScoreBoard";
import { CarouselPokeCard } from "@src/components/organism/CarouselPokeCard";
import CarouselType from "@src/components/organism/CarouselType";
import FormPoke from "@src/components/organism/FormPoke";
import { useGetApi } from "@src/hooks/useGetPoke";
import { initialPokeState, PokeContext } from "@src/stores/pokeProvider";
import { pokeReducer } from "@src/stores/pokeReduce";

const Page: FC = () => {
  const { pokes } = useGetApi();

  return (
    <div>
      <Header />
      <SubHeader />
      <CarouselType />
      <div className="w-[calc(100%_-_10px)] h-[calc(100%_-_10px)] home mx-auto">
        <ScoreBoard />
        <IndexCounter />
        <br />
        <CarouselPokeCard pokes={pokes} />
        <FormPoke />
      </div>
      <OptionLevel />
    </div>
  );
};

const HomePage: FC = () => {
  const [state, dispatch] = useReducer(pokeReducer, initialPokeState);
  return (
    <PokeContext value={{ state, dispatch }}>
      <Page />
    </PokeContext>
  );
};

export default HomePage;
