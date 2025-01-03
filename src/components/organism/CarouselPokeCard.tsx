import { useEffect, useRef } from "react";
import Slider from "react-slick";

import PokeCard from "@src/components/molecule/PokeCard";
import { usePokeSelector } from "@src/hooks/core";
// import "@src/lib/slick-carousel/index.css"
import { SETTING } from "@src/lib/react-slick/setting";
import { useInsertCSS } from "@src/lib/slick-carousel/useInsertCSS";
import { getUrlImg } from "@src/utils";

export const CarouselPokeCard = () => {
  // ( ˘▽˘)っ♨
  useInsertCSS();
  // instead of import like commend above, insert css to head.
  // increase jsimport { getUrlImg } from '../../utils/index';
  //  from 256.43 to 258.01
  // reduce css from 8.16 to 7.04

  const ref = useRef(null);
  const pokes = usePokeSelector("pokes");
  const activeIndex = usePokeSelector("activeIndex");
  useEffect(() => {
    if (activeIndex % 3 === 0) {
      // @ts-expect-error test
      ref?.current?.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  if (!pokes || pokes.length === 0) {
    return <div>loading</div>;
  }
  return (
    <section className="">
      <Slider {...SETTING} ref={ref}>
        {pokes.map((record, idx) => (
          <PokeCard
            key={idx}
            imgUrl={getUrlImg(record.name)}
            name={record.name}
            isActive={activeIndex === idx}
          />
        ))}
      </Slider>
    </section>
  );
};
