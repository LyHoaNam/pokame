import Slider from "react-slick";
import PokeCard from "@src/components/molecule/PokeCard";
import "@src/lib/slick-carousel/index.css"
import { SETTING } from "@src/lib/react-slick/setting";
const data = [
  { name: "duck", imgUrl: "https://i.imgur.com/p3FfEL6.png" },
  { name: "duck", imgUrl: "https://i.imgur.com/FldDlNb.png" },
  { name: "duck", imgUrl: "https://i.imgur.com/pGKpAlb.png" },
];
export const CarouselPokeCard = () => {
  return (
    <Slider {...SETTING}>
      {data.map((record, idx) => (
        <PokeCard key={idx} imgUrl={record.imgUrl} name={record.name} />
      ))}
    </Slider>
  );
};
