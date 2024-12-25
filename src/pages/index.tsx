import type { FC } from "react";

import { Header } from "@src/components/atom/Header";
import { SubHeader } from "@src/components/atom/SubHeader";
import CountdownTimer from "@src/components/molecule/CountdownTimer";
import ScoreBoard from "@src/components/molecule/ScoreBoard";
import WordBoard from "@src/components/molecule/WordBoard";
import { CarouselPokeCard } from "@src/components/organism/CarouselPokeCard";
import KeyBoard from "@src/components/organism/KeyBoard";

export const HomePage: FC = () => {
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

      <WordBoard />
      <KeyBoard />
    </>
  );
};
