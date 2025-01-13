import Slider from "react-slick";

import Label from "@src/components/atom/label";
import { POKE_TYPES } from "@src/constants/POKE_TYPES";
import { SETTING_RIDER } from "@src/lib/react-slick/setting";

const CarouselType = () => {
  return (
    <section className="m-auto w-9/12 px-4 mb-2">
      <Slider {...SETTING_RIDER}>
        {POKE_TYPES.map((label, index) => (
          <Label.Poke label={label} key={index} />
        ))}
      </Slider>
    </section>
  );
};
export default CarouselType;
