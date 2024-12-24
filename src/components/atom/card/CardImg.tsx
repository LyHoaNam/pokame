import type { FC } from "react";
interface Props {
  imgUrl: string;
  name?: string;
}
export const CardImg: FC<Props> = ({ imgUrl, name }) => {
  return (
    <div className="mb-2">
      <img
        src={imgUrl}
        width="100"
        height="100"
        className="object-contain"
        alt={name || "card img"}
      />
    </div>
  );
};
