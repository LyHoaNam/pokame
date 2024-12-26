import { type FC, useReducer } from "react";

import { Header } from "@src/components/atom/Header";
import { SubHeader } from "@src/components/atom/SubHeader";
import CountdownTimer from "@src/components/molecule/CountdownTimer";
import ScoreBoard from "@src/components/molecule/ScoreBoard";
import { CarouselPokeCard } from "@src/components/organism/CarouselPokeCard";
import FormPoke from "@src/components/organism/FormPoke";
import { pokeReducer } from "@src/stores/pokeReduce";
import { initialPokeState, PokeContext } from "@src/stores/PokeStore";

const Page: FC = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <ScoreBoard />
      <CountdownTimer />
      <br />
      <br />
      <br />

      <CarouselPokeCard />
      <br />
      <br />

      <FormPoke />
    </>
  );
};

const HomePage: FC = () => {
  const [state, dispatch] = useReducer(pokeReducer, initialPokeState);
  return (
    <PokeContext.Provider value={{ state, dispatch }}>
      <Page />
    </PokeContext.Provider>
  );
};

export default HomePage;
