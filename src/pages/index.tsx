import { Header } from "@src/components/atom/Header";
import { SubHeader } from "@src/components/atom/SubHeader";
import { CarouselPokeCard } from "@src/components/organism/CarouselPokeCard";
import KeyBoard from "@src/components/organism/KeyBoard";
import type { FC } from "react";

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <CarouselPokeCard />
      <KeyBoard />
    </>
  );
};
