import { ICart } from './ICart';

export interface IButton {
  product: ICart;
  addToCart: (product: ICart) => void;
}
