import { ICard } from "./ICard";

export interface IButton {
  product: ICard;
  addToCart?: (props: any) => void;
}


