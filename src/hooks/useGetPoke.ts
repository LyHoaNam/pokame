import { use, useEffect, useOptimistic, useState, useTransition } from "react";

import { INIT_DATA } from "@src/constants/BASE";
import { PokeContext } from "@src/stores/pokeProvider";
import type { PokeCard } from "@src/stores/pokeType";
import { shuffle } from "@src/utils";
import { getApi } from "@src/utils/api";

import { useDispatch } from "./core";

export const useGetApi = () => {
  const { state } = use(PokeContext);
  const [, startTransition] = useTransition();
  const { option } = state;
  const dispatch = useDispatch();
  const [data, setData] = useState<PokeCard[]>([]);
  const [optimisticPokes, addOptimistic] = useOptimistic(
    data,
    (_, newData: PokeCard[]) => {
      return [...newData];
    }
  );
  useEffect(() => {
    (async () => {
      startTransition(async () => {
        addOptimistic(INIT_DATA);
        try {
          const data = await getApi(
            `/?limit=${option.limit}&offset=${option.offset}`
          );
          if (data.results && data.results.length > 0) {
            const pokes = shuffle<PokeCard>(
              data.results.filter((record: { name: string }) => record.name)
            );
            dispatch({ type: "INITIAL_POKE", payload: pokes });
            setData(pokes);
            return;
          }
        } catch (e) {
          console.log(e);
          setData(data);
        }
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, option.limit, option.offset]);
  return { pokes: optimisticPokes };
};
